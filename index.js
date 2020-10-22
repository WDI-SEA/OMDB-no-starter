require('dotenv').config()
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

app.use(methodOverride('_method'))
app.set('view engine','ejs')
app.use(ejsLayouts)

app.use(express.urlencoded({extended: false}))
app.use('/movies', require('./controllers/movies'))


app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.listen(8000,()=>{
    console.log('the 8000 port is on')
})