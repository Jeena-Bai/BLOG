import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <h3>BlogApp Login</h3>
    <TextField
          label="Email"
         />
        <br></br>
        <TextField
          
          id="outlined-disabled"
          label="Password"
          
        />
        <div>
        <br></br>
        <Button variant="contained" color="secondary">Login</Button>
        </div>
        <br></br>
        <Link to={"/signup"}>New user?Click Here</Link>
        
        </Box>
    
  )
}

export default Login