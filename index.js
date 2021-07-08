const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4444

app.use(cors())
app.use(express.json())

app.use("/api/", (_, res) => {
    res.json({data:"API is accounted for"})
})

app.listen(port,() => {
    console.log(`Server is listening on ${port}`)
})




// console.log("Its alive")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME)
// console.log(process.env.PORT)
// console.log(process.env.GREET)
// console.log(process.env.GOODBYE)