import { TextField } from "@mui/material"
import { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { register, reset, logout } from "../features/auth/authSlice"
import { makeStyles } from "@mui/styles"
import Spinner from "../components/Spinner"
import { Link as UiLink } from "@mui/material"

const useStyles = makeStyles({
  input: {
    color: "white",
    minWidth: "40vw",
  },
})

const formData = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
}

const Signup = () => {
  const classes = useStyles()

  // get state data
  const [{ name, email, password, password_confirmation }, setFormData] =
    useState(formData)

  const navigate = useNavigate()
  const dispatch = useDispatch()

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

    if (isSuccess) {
      message.forEach((mes) => {
        toast.success(mes)
      })
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

    const userData = {
      name,
      email,
      password,
      password_confirmation,
    }

    dispatch(register(userData))
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
          <h1>Sign Up</h1>
          <p>Sign Up by entering your information here</p>
        </section>

        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <TextField
                required
                inputProps={{ className: classes.input }}
                label="Name"
                name="name"
                variant="outlined"
                value={name}
                onChange={onChange}
              />
            </div>
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
                type="password"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <TextField
                required
                inputProps={{ className: classes.input }}
                label="Confirm Password"
                name="password_confirmation"
                variant="outlined"
                value={password_confirmation}
                type="password"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <Button variant="contained" type="submit">
                Sign Up
              </Button>
              <p>
                Already Registered :
                <UiLink variant="body2" component={Link} to={"/Login"}>
                  &nbsp; Login Here
                </UiLink>
              </p>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
export default Signup
