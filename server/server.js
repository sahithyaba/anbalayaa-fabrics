const express=require('express');
const {db}=require('./db');

const app=express();
app.use(express.json())

var cors=require('cors')
app.use(cors())

app.get("/api", (req, res) =>{ res.status(200).json({message: "App is ready to serve ✨"});})

const port=process.env.port

app.listen(port, () => {console.log('Server is ready 🤩')});

module.exports=app