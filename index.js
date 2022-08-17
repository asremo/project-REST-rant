require('dotenv').config()
const express = require('express')
const app = express()

// home page route
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// 404 page route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>') 
    //chaining = calling multiple methods together on the same line
})

app.listen(process.env.PORT)
