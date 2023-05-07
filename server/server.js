const express=require('express');
const {db}=require('./db');

const app=express();
app.use(express.json())

var cors=require('cors');
const { default: mongoose } = require('mongoose');
app.use(cors())

require('./imageDetails')
const Images=mongoose.model('ImageDetails')

app.get("/api", (req, res) =>{ res.status(200).json({message: "App is ready to serve ✨"});})

const port=process.env.port

app.listen(port, () => {console.log('Server is ready 🤩')});

app.post('/upload-image',async(req,res)=>{
    const {base64}=req.body;
    try{
      await Images.create({image:base64});
        res.send({status:'ok'})
    }catch(error){
        res.send({status:'error',data:error})
    }
})

module.exports=app

