import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import { makeStyles } from "@mui/styles"
import Spinner from '../components/Spinner'


const useStyles = makeStyles({
  input: {
    color: "white",
    minWidth: "30vw",
  },
})

const formData = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
}


const Signup = () => {

  const { name, email, password, password_confirmation} = formData

const navigate = useNavigate()
const dispatch = useDispatch()

const { user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

//on submit
if( password !== password_confirmation) {
  toast.error('Passwords do not match')
} else {
  const userData = {
    name,
    email,
    password,
    password_confirmation
  }

  dispatch(register(userData))
}

//before onchage
useEffect(() => {
  if(isError) {
    toast.error(message)
  }

  //navigate to dashboard later
  if(isSuccess || user) {
    navigate('/')
  }

  dispatch(reset())
}, [user, isError, isSuccess, message, navigate, dispatch])


  if(isLoading) {
    return <Spinner />
  }
  
  return <div>Signup</div>;
};
export default Signup;
