const express=require('express');
const router=express.Router();

const posts=require("../models/Data")

router.use(express.json())

router.get('/blogs',async(req,res)=>{
    try{
        const data=await posts.find({});
        res.status(200).send(data);
    }
    catch(error){
        res.status(400).send("not found")
    }
})

router.post('/add',async(req,res)=>{
    try{
        //console.log(req.body)
        var postItem=
    {
       
        title:req.body.title,
        image:req.body.image,
        desc:req.body.desc,
        date:req.body.date
    }
    
    var post=new posts(postItem)
    await post.save()
    res.status(201).json(postItem)
    
    }
    catch(error)
    {
     console.log("error")
     res.status(500).json({error:'Internal server error'})
    }
})
    

module.exports=router