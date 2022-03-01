import { TextField } from "@mui/material"
import { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { update, reset, get } from "../features/auth/authSlice"
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
}

const Dashboard = () => {
  const classes = useStyles()

  const [{ name, email, password }, setFormData] = useState(formData)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message, profile } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    dispatch(get())
  },[])

  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  },[user] )

  useEffect(() => {
    if (isError) {
      message.forEach(mes => {toast.error(mes)})
    }

    if (isSuccess) {
      message.forEach(mes => {toast.success(mes)})
    }

    dispatch(reset())
    dispatch(get())

  }, [isError, isSuccess, navigate, dispatch])

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
    const tempData = {
      name,
      email,
      password
    }
      const userData = {}
      for( let obj in tempData) {
        if (tempData[obj]) {
          userData[obj] = tempData[obj]
        }
      }

      if( Object.keys(userData).length == 0) {
        toast.error('Please Enter Atleast One Field To Update')
      } else {
        dispatch(update(userData))
        resetValues()
      }
  }

  return (
    <>

      <div className="form-container">
        <section className="heading">
          <h1>Profile</h1>
          { !profile.message ? (<p>Name : {profile.name} <br/>Email : {profile.email} <br/></p>) : ('')}
          <p>Update your Information here</p>
        </section>

        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <TextField
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
                inputProps={{ className: classes.input }}
                label="Password"
                name="password"
                variant="outlined"
                value={password}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <Button variant="contained" 
              type="submit"
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
