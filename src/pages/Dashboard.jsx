import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { TextField } from "@mui/material"
import Button from "@mui/material/Button"
import { makeStyles } from "@mui/styles"

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
}

const Dashboard = () => {
  const classes = useStyles()

  const [{ name, email, password }, setFormData] = useState(formData)

  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  }, [user, navigate])

  return (
    <>
      <div id="form-container">
        <section className="heading">
          <h1>Profile</h1>
          <p>Update your Information here</p>
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
                // value={name}
                // onChange={onChange}
              />
            </div>
            <div className="form-group">
              <TextField
                required
                inputProps={{ className: classes.input }}
                label="Email"
                name="email"
                variant="outlined"
                // value={email}
                // onChange={onChange}
              />
            </div>
            <div className="form-group">
              <TextField
                required
                inputProps={{ className: classes.input }}
                label="Password"
                name="password"
                variant="outlined"
                // value={password}
                // onChange={onChange}
              />
            </div>
            <div className="form-group">
              <Button variant="contained" 
              // onClick={onSubmit}
              >
                Update
              </Button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
export default Dashboard
