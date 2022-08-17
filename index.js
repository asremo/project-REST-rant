require('dotenv').config()
const express = require('express')
const app = express()

// difines the view engine (JSX) that we will be using
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// import the router we just created ./controllers/places.js file
app.use('/places', require('./controllers/places'))

// home page route
app.get('/', (req, res) => {
    res.render('home')
})

// 404 page route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>') 
    //chaining = calling multiple methods together on the same line
})

app.listen(process.env.PORT)

