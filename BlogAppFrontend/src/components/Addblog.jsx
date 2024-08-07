import React, { useState } from 'react' 
import axios from 'axios'
import { Button, Grid, TextField } from '@mui/material'
const Addblog = () => {
  const [form,setForm]=useState({
    image:'',
    title:'',
    desc:''
  })
  function capValue()
  {
    axios.post("http://localhost:3000/api/add",form).then((res)=>{
     alert("blog added")
    })
  }
  return (
    <div style={{margin:'5%'}}>
    <Grid container spacing={1}>
        <Grid item xs={6} md={12} sm={12}>
        <TextField fullWidth id="outlined-basic" label="BlogName" value={form.title} 
        onChange={(e)=>{
            setForm({...form,title:e.target.value})
          }}
          variant="outlined" />
        </Grid>
        <Grid item xs={6} md={12} sm={12}>
        <TextField fullWidth multiline rows={12} 
          id="outlined-basic" label="Blog Description"
          value={form.desc} 
        onChange={(e)=>{
            setForm({...form,desc:e.target.value})
          }}
          
          variant="outlined" />
      
        </Grid>
        <Grid item xs={6} md={12} sm={12}>
        <TextField fullWidth id="outlined-basic" label="ImageURL" 
        
        value={form.image} 
        onChange={(e)=>{
            setForm({...form,image:e.target.value})
          }}variant="outlined" />
        </Grid>
        <Grid item xs={6} md={12} sm={12}>
        <Button variant="outlined" onClick={capValue} >ADD BLOG</Button>
        </Grid>
       
      </Grid>
    </div>
  )
}

export default Addblog