import { TextField, Container } from "@mui/material"
import { useState } from "react"
import Button from "@mui/material/Button"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: null,
    subject: "",
    message: "",
  })

  const { name, email, phone, subject, message} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.label]: e.target.value,
    }))
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
                label="name"
                variant="outlined"
                value={name}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <TextField
                label="email"
                variant="outlined"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <Button variant="outlined" onClick={onSubmit}>Submit</Button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
export default ContactUs
