import { TextField } from "@mui/material"
import { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { register, reset } from "../features/auth/authSlice"
import { makeStyles } from "@mui/styles"
import Spinner from "../components/Spinner"

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

  const [{ name, email, password, password_confirmation }, setFormData] = useState(formData)

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
    if (password !== password_confirmation) {
      toast.error("Passwords do not match")
    } else {
      const userData = {
        name,
        email,
        password,
        password_confirmation,
      }

      dispatch(register(userData))
    }

    resetValues()
  }

  return (
    <>
      <div id="form-container">
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
          <form>
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
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <Button variant="contained" onClick={onSubmit}>
                Sign Up
              </Button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
export default Signup
