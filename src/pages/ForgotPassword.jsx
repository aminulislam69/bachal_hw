import React from 'react'
import {TextField,Button} from '@mui/material';

const ForgotPassword = () => {
  return (
    <div className="forgotPassword">
        <div className="forgotPasswordBody">
            <h1>Forgotpassword....?</h1>
        <TextField id="outlined-basic" label="Eneter your Email" variant="outlined" />
        <Button variant="contained">Go</Button>

        </div>
    </div>

  )
}

export default ForgotPassword