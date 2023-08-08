import React from 'react'
import {TextField, Alert} from '@mui/material';
import regLogo from '../assets/regLogo.png'
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs'



let innitialValues = {
  email: "",
  password: "",
  loding: false,
  error:""
}



const Login = () => {
 
   
  const auth = getAuth();

  let [values, setValues] = useState(innitialValues)

  let handleValue = (e) =>{
    setValues({
      ...values,
      [e.target.name]:e.target.value
    })
  }

  let handleSubmit =()=>{

    let {email, password} = values

    if(!email){
      setValues({
        ...values,
        error:"Enter your email"
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

  
    signInWithEmailAndPassword(auth, email, password)
  .then((user) => {
    setValues({
      email: "",
      password: "",
      loding:false,
      eye: false
    })
    // navigate("/login")
    console.log(user)
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
        <h4 className='regheading'>Login</h4>
        <p className='regpara'>Free register and you can enjoy it</p>
        <div className="reginput">
          <TextField value={values.email}   onChange={handleValue} name ="email" id="outlined-basic" label="Email Addres" variant="outlined" />
          {values.error.includes("email") &&  <Alert severity="error">{values.error}</Alert>}
        </div>
        <div className="reginput">
          <TextField value={values.password} type={values.eye ? 'password' : 'text'} onChange={handleValue} name ="password" id="outlined-basic" label="Password" variant="outlined" />
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
            <Alert severity="info">Have No account — <Link to={"/"}>Sign Up</Link></Alert>
        </div>

        {values.loding 
            ? 
                <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
                Fetch data
                </LoadingButton>
            :
                <div className="regbutton">
                <Button onClick={handleSubmit} variant="contained">Sign In</Button>
                </div>
        }
       
      </div>
    </div>
</>
  )
}

export default Login