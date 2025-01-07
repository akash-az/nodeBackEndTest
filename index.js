require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000


app.get('/', (req,res) => {
    res.send("Hello Rahul")
} )

app.get('/twitter', (req,res) => {
    res.send("this is twitter")
})

app.get('/login', (req,res) => {
    res.send('<h1>this is twitter</h1>')
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
})