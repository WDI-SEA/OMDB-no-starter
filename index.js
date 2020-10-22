require('dotenv').config()
const express = require('express')
const app = express()
const axios = require('axios')

app.set('view engine', 'ejs')
//import express-ejs-layouts and require it
const ejsLayouts = require('express-ejs-layouts')
//set up middleware
app.use(ejsLayouts)

const fs = require('fs')

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//body-parser middleware allows us to use req.body in dino post route
app.use(express.urlencoded({extended: false}))


app.use('/movies', require('./controllers/movies'))

app.listen(process.env.PORT)