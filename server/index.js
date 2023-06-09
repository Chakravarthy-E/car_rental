const express = require("express")
const cors = require("cors")
const authroutes =require("./Routes/authroutes")
require("./db/dbconnection")
const cookieParser = require('cookie-parser');

const app = express()
const port = 5000
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})

app.use(authroutes);
