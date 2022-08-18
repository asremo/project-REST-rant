require('dotenv').config()
const express = require('express')
const app = express()

// difines the view engine (JSX) that we will be using
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// import the router we just created ./controllers/places.js file
app.use('/places', require('./controllers/places'))

// home page route
app.get('/', (req, res) => {
    res.render('home')
})

// 404 page route
app.get('*', (req, res) => {
    res.render('error404')
})


app.listen(process.env.PORT)

