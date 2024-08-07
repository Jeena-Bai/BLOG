import { Button, Grid,TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    
    <div style={{margin:'12%'}}>
    <Grid container spacing={2}>
        <Grid item xs={6} md={12} sm={12}>
        <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6} sm={6}>
        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" /> 
        </Grid>
        <Grid item xs={6} md={6} sm={6}>
        <TextField fullWidth id="outlined-basic" label="Phone" variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6} sm={6}>
        <TextField fullWidth id="outlined-basic" label="Paaword" variant="outlined" />
        </Grid>
        <Grid item xs={6} md={6} sm={6}>
        <TextField fullWidth id="outlined-basic" label="Confirm Password" variant="outlined" />
        </Grid>
        <Grid item xs={6} md={12} sm={12}>
        <Button variant="contained" color="secondary">SignUp</Button>
        <br></br>
        <Link to={"/"}>Back to Login</Link>
        </Grid>
      </Grid>
    </div>
    
  );
}


 

export default Signup