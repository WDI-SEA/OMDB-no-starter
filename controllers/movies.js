const express = require('express')
const router = express.Router()
const fs=require('fs')
const axios = require('axios')
const omdbQuery= `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=`
const api_key = 'cb1d797d'

//req.body = this is where (if) any submitted form data will be stored in
//req.params = ?
//req.query = this is where the string data is stored.


//HOME ROUTE 
router.get('/', (req, res)=>{
    res.render('home')
})


//RESULTS ROUTE
router.get('/results', (req, res)=>{
    let titleFilter= req.query.titleFilter  //ask why we use req.query and not params. I think its because the object API we are using has multiple keys
    console.log(titleFilter)
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${titleFilter}`)  // we are getting the movies list and details from an outside source, we can access it by using API
        .then(response =>{
         //    res.send(response.data) //shows the raw data
           res.render('results', {movie: response.data})
        })
        .catch(err =>{
            console.log(err)
        })
})




// SHOW ROUTE. Shows detailed info about 1 movie result. This crud would be read.  (3)
router.get('/:movieId', (req, res)=>{
  //  res.render(`showing info about movie ${req.params.movieId}`)
  let movieId= req.params.movieId
  axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${movieId}`)
  .then(response=>{
    console.log(response.data)
    res.render('show', {moviesId: response.data })  //so the variable moviesId came from my show route, because i called it moviesID. The second variable came from my Url parameter. we then changes it to response.data to get all the info
  }) 
})





//POST ROUTE. this crud would be create (4)
router.get('/favorites', (req, res)=>{
    res.render('favorites')
})







//POST ROUTE. this crud would be create (5)
router.put('/', (req, res)=>{
    res.render('')
})




module.exports = router;