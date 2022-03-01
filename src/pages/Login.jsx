import { TextField } from "@mui/material"
import { useState } from "react"
import Button from "@mui/material/Button"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  input: {
    color: "white",
    minWidth: "30vw",
  }
})

const formData = {
  email: "",
  password: "",
}

const Login = () => {
  const classes = useStyles()

  const [{ email, password }, setFormData] = useState(formData)

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

    let payload = {
      email,
      password,
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
      </div>
    </>
  )
}

export default Login
