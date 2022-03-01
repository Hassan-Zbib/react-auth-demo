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

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate("/Dashboard")
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  if (isLoading) {
    return <Spinner />
  }

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

      dispatch(register(userData))
    }

    resetValues()
  }

  return (
    <>
      <div id="form-container">
        <section className="heading">
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
              <Button variant="contained" onClick={onSubmit}>
                Login
              </Button>
            </div>
          </form>
        </section>
        <section className="heading">
          <p>
            New User :
            <UiLink variant="body2" component={Link} to={"/Signup"}>
              Create Account
            </UiLink>
          </p>
        </section>
      </div>
    </>
  )
}

export default Login
