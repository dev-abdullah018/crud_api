require('dotenv').config()
const express = require('express')
const router = require("./routes")
const mongoConfig = require('./config/mongoConfig')
const app = express()


mongoConfig()

app.use(express.json());
app.use("/", router)

const port = process.env.PORT || 8000  

app.listen(port, ()=>{
    console.log("Port Running")
});
