const express = require("express")
require("dotenv").config()
const app = express()
const color = require("colors")
const { connectDB } = require("./controller/config/db")

const PORT = process.env.PORT || 5000

connectDB()

// Body Parser 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res) => {
    res.json({mssg : "Welcome to FakeStore API"})
})

app.use("/estore",require("./router/storeRouter"))

app.listen(PORT,() => {
    console.log(`Server is running on PORT : ${PORT}`.cyan.underline);
})