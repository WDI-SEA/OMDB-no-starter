require('dotenv').config()
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts') //installs ejs
const movies = require('./controllers/movies') 
const axios = require('axios')
const api_key = 'cb1d797d'
//const omdbQuery= `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=`


app.set('view engine', 'ejs')  //installs ejs
app.use(ejsLayouts) //installs ejs
app.use(express.urlencoded({extended:false}))  
app.use('/movies', movies)








app.listen(process.env.PORT)


// app.listen(8001, ()=>{
//     console.log("port 8001 is up and running")
// })

// // HOME ROUTE. this crud would be read.  (1)
// router.get('/', (req, res)=>{
//     res.render('home')
// })


// //POST ROUTE. this crud would be create (2)
// router.post('/', (req, res)=>{
//     res.render('')
// })


// // this crud would be read.  (3)
// router.get('/', (req, res)=>{
//     res.render('')
// })


// //POST ROUTE. this crud would be create (4)
// router.post('/', (req, res)=>{
//     res.render('')
// })


// //POST ROUTE. this crud would be create (4)
// router.put('/', (req, res)=>{
//     res.render('')
// })





