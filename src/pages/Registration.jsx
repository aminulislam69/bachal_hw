import React, { useState } from 'react'
import {TextField,  Alert} from '@mui/material';
import regLogo from '../assets/regLogo.png'
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs'



let innitialValues = {
  email: "",
  fullName:"",
  password: "",
  loding: false,
  error:"",
  eye:false
}

const Registration = () => {

  let navigate = useNavigate()

  const auth = getAuth();

  let [values, setValues] = useState(innitialValues)

  let handleValue = (e) =>{

    setValues({
      ...values,
      [e.target.name]:e.target.value
    })
  }

  let handleSubmit =()=>{
    
    let {email, fullName, password} = values

    if(!email){
      setValues({
        ...values,
        error:"Enter your email"
      })
      return
    }

    if(!fullName){
      setValues({
        ...values,
        error:"Enter your Name"
      })
      return
    }

    if(!password){
      setValues({
        ...values,
        error:"Enter password"
      })
      return
    }


    setValues({
       ...values,
      loding:true
    })

    createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    sendEmailVerification(auth.currentUser)
  .then(() => {
   console.log("emailsent")
  });
    setValues({
      email: "",
      fullName:"",
      password: "",
      loding:false
    })
    navigate("/login")
    })

  }


  let handleEye = () =>{
    setValues({
      ...values,
      eye:!values.eye
    })
  }


  return (
    <>
        <div className="regcontainer">
          <div className="regbody">
            <img className='regimg' src={regLogo}></img>
            <h4 className='regheading'>Get started with easily register</h4>
            <p className='regpara'>Free register and you can enjoy it</p>
            <div className="reginput">
              <TextField value={values.email}   onChange={handleValue} name ="email" id="outlined-basic" label="Email Addres" variant="outlined" />
              {values.error.includes("email") &&  <Alert severity="error">{values.error}</Alert>}
             
            </div>
            <div className="reginput">
              <TextField value={values.fullName} onChange={handleValue} name ="fullName" id="outlined-basic" label="Full name" variant="outlined" />
              {values.error.includes("Name") &&  <Alert severity="error">{values.error}</Alert>}
            </div>
            <div className="reginput">
              <TextField value={values.password}  type={values.eye ? 'password' : 'text'} onChange={handleValue} name ="password" id="outlined-basic" label="Password" variant="outlined" />
              {values.error.includes("password") &&  <Alert severity="error">{values.error}</Alert>}

              {values.eye ?
              
              <div className="eye" onClick={handleEye}>
              <BsEye/>
              </div>
              :
              <div className="eye" onClick={handleEye}>
              <BsEyeSlash/>
              </div>
              }
              
            </div>

            <div className="reginput">
            <Alert severity="success">Already have an account — <Link to={"/login"}>Login</Link></Alert>
            </div>

            

            {values.loding 
            ? 
                <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
                Fetch data
                </LoadingButton>
            :
                <div className="regbutton">
                <Button onClick={handleSubmit} variant="contained">Sign up</Button>
                </div>
            }

            
           
          </div>
        </div>
    </>
  )
}

export default Registration