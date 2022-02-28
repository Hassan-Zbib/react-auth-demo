import { TextField } from "@mui/material"
import { useState } from "react"
import Button from "@mui/material/Button"
import { makeStyles } from "@mui/styles"
import axios from "axios"

const useStyles = makeStyles({
  input: {
    color: "white",
    minWidth: "30vw",
  },
})

const ContactUs = () => {
  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/contact/add",
  })
  const classes = useStyles()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const resetValues = () => {
      setFormData(formData.getInitialState())
  }

  const { name, email, phone, subject, message } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
        let response = await api.post('/', formData).then(res => res.data)
        console.log(response)
    } catch (error) {
        console.log(error)
    }



  }

  return (
    <>
      <div id="contact-us">
        <section className="heading">
          <h1>Contact Us</h1>
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
            </div>{" "}
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
            </div>{" "}
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
            </div>{" "}
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
              <Button variant="contained" onClick={onSubmit}>
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
