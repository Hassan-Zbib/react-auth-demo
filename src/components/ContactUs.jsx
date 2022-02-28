import { TextField } from "@mui/material"
import { useState } from "react"
import Button from "@mui/material/Button"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  input: {
    color: "white",
    minWidth: '30vw'
  },
})

const ContactUs = () => {
  const classes = useStyles()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const { name, email, phone, subject, message } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
    console.log(formData)
  }

  const onSubmit = (e) => {
    e.preventDefault()
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
            </div>{" "}
            <div className="form-group">
              <TextField
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
              <Button variant="outlined" onClick={onSubmit}>
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
