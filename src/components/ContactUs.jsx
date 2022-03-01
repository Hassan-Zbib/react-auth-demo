import { TextField } from "@mui/material"
import { useState } from "react"
import Button from "@mui/material/Button"
import { makeStyles } from "@mui/styles"
import axios from "axios"
import { toast } from "react-toastify"

const useStyles = makeStyles({
  input: {
    color: "white",
    minWidth: "40vw",
  },
})

const formData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
}

const ContactUs = () => {
  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/contact/add",
  })
  const classes = useStyles()

  // get state data
  const [{ name, email, phone, subject, message }, setFormData] =
    useState(formData)

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

    let payload = {
      name,
      email,
      phone,
      subject,
      message,
    }

    api
      .post("/", payload)
      .then((res) => {
        toast.success(res.data.message)
      })

      .catch((err) => {
        let error = err.response.data
        for (let key in error.errors) {
          error.errors[key].forEach((mes) => {
            toast.error(mes)
          })
        }
      })

    resetValues()
  }

  return (
    <>
      <div className="form-container" id="contact-us">
        <section className="heading">
          <h1>Contact Us</h1>
          <p>For any enquiries please fill this form</p>
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
                label="Phone"
                name="phone"
                variant="outlined"
                value={phone}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <TextField
                required
                inputProps={{ className: classes.input }}
                label="Subject"
                name="subject"
                variant="outlined"
                value={subject}
                fullWidth
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <TextField
                required
                multiline={true}
                rows={3}
                inputProps={{ className: classes.input }}
                label="Message"
                name="message"
                variant="outlined"
                value={message}
                fullWidth
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
export default ContactUs
