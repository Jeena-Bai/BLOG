const mongoose=require('mongoose')
const newSchema=new mongoose.Schema({
    title:String,
    image:String,
    desc:String,
    date:Date
    
})
const Blog=mongoose.model('blogdata',newSchema)
module.exports=Blog