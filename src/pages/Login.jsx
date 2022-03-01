import { TextField } from "@mui/material"
import { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import { makeStyles } from "@mui/styles"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"
import { Link } from "react-router-dom"
import { Link as UiLink } from "@mui/material"

const useStyles = makeStyles({
  input: {
    color: "white",
    minWidth: "40vw",
  },
})

const formData = {
  email: "",
  password: "",
}

const Login = () => {
  const classes = useStyles()

  const [{ email, password }, setFormData] = useState(formData)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // get state data
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  // watch state
  useEffect(() => {
    if (isError) {
      message.forEach((mes) => {
        toast.error(mes)
      })
    }

    if (isSuccess || user) {
      navigate("/Dashboard")
    }

    dispatch(reset())
  }, [user, isError, isSuccess, navigate, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  //reset form data
  const resetValues = () => {
    setFormData({ ...formData })
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    // inplace validation
    if (!email) {
      toast.error("Email is empty")
    } else {
      let userData = {
        email,
        password,
      }

      dispatch(login(userData))
    }

    resetValues()
  }

  return (
    <>
      <div className="form-container">
        <section className="heading">
          <Button
            sx={{ my: 2, color: "white" }}
            component={Link}
            variant="outlined"
            to={"/"}
          >
            Go Back
          </Button>
          <h1>Login</h1>
          <p>Login by entering your credentials here</p>
        </section>

        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <TextField
                required
                inputProps={{ className: classes.input }}
                label="Email"
                name="email"
                variant="outlined"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <TextField
                required
                inputProps={{ className: classes.input }}
                label="Password"
                name="password"
                variant="outlined"
                value={password}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <Button variant="contained" type="submit">
                Login
              </Button>
              <p>
                New User :
                <UiLink variant="body2" component={Link} to={"/Signup"}>
                  &nbsp; Create Account
                </UiLink>
              </p>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default Login
