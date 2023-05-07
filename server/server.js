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

// require("dotenv").config();
// const upload = require("./routes/upload");
// const Grid = require("gridfs-stream");
// const mongoose = require("mongoose");
// const connection = require("./db");
// const express = require("express");
// const app = express();

// let gfs;
// connection;

// const conn = mongoose.connection;
// conn.once("open", function () {
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection("photos");
// });

// app.use("/file", upload);

// // media routes
// app.get("/file/:filename", async (req, res) => {
//     try {
//         const file = await gfs.files.findOne({ filename: req.params.filename });
//         const readStream = gfs.createReadStream(file.filename);
//         readStream.pipe(res);
//     } catch (error) {
//         res.send("not found");
//     }
// });

// app.delete("/file/:filename", async (req, res) => {
//     try {
//         await gfs.files.deleteOne({ filename: req.params.filename });
//         res.send("success");
//     } catch (error) {
//         console.log(error);
//         res.send("An error occured.");
//     }
// });

// const port = process.env.port || 5000;
// app.listen(port, console.log(`Listening on port ${port}...`));