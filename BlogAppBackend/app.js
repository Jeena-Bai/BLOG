const express=require('express')
const app=new express()
const morgan=require('morgan')
const mongoose=require('mongoose')
const cors=require('cors');
app.use(cors())

require('dotenv').config()
require('./db/dbConnect');
app.use(morgan('dev'))


const postRoute=require('./routes/postRouter')
app.use('/api',postRoute)

app.listen(process.env.PORT,()=>{     //server in listening mode
    console.log(`Server is listening on PORT ${process.env.PORT}`);
})

