const express = require("express")
const cors = require("cors")
require("./db/dbconnection")

const app = express()
const port = 5000
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})
