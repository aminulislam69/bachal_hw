import React from 'react'
import TextField from '@mui/material/TextField';
import regLogo from '../assets/regLogo.png'
import Button from '@mui/material/Button';

const Registration = () => {
  return (
    <>
        <div className="regcontainer">
          <div className="regbody">
            <img className='regimg' src={regLogo}></img>
            <h4 className='regheading'>Get started with easily register</h4>
            <p className='regpara'>Free register and you can enjoy it</p>
            <div className="reginput">
              <TextField id="outlined-basic" label="Email Addres" variant="outlined" />
            </div>
            <div className="reginput">
              <TextField id="outlined-basic" label="Full name" variant="outlined" />
            </div>
            <div className="reginput">
              <TextField id="outlined-basic" label="Password" variant="outlined" />
            </div>
            <div className="regbutton">
              <Button  variant="contained">Sign up</Button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Registration