const mongoose=require('mongoose')
mongoose.connect(process.env.mongo_url)
.then(()=>console.log('Connected'));