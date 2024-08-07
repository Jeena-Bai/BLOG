import { Card,  CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Blogs = () => {
const [data,setData]=useState([]);
useEffect(()=>{
          axios.get('http://localhost:3000/api/blogs').then((res)=>{
          //console.log(res)
          setData(...data,res.data)
          })
  },[])
  return (
<div style={{margin:'5%'}}>
<Grid container spacing={2}>
     {data.map((item, i) => (
    <Grid item  key={i} xs={6} md={4} sm={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.image}
        //image="https://tse4.mm.bing.net/th?id=OIP.82jo0QGjP_DfE-itiRv8AAHaEy&pid=Api&P=0&h=220"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.desc}
        </Typography>
      </CardContent>
    
</Card>

</Grid>
    ))}
</Grid>
</div>
  );
};





export default Blogs
