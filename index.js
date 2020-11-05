require('dotenv').config()
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
app.set('view engine','ejs')
app.use(ejsLayouts)
app.use(express.static('public'))
const db = require('./models')

app.use('/movies', require('./controllers/movies'))

app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.listen(process.env.PORT,()=>{
    console.log('the 8000 port is on')
})