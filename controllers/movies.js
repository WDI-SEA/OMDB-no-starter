const express = require('express')
const router = express.Router()
const axios = require('axios')


// GET Method
//Get all the movies
router.get('/', (req, res)=>{
    let movie = req.query.movie
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${movie}`)
    .then((response)=>{
        let searchArray = response.data.Search
        res.render('results', {searchArray: searchArray})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/:movie_id', (req, res)=>{
    let movieId = req.params.movie_id
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${movieId}`)
    .then((response)=>{
        let movieArray = response.data
        console.log(movieArray)
        res.render('show', {imdbID: movieId, movieName: movieArray.Title, movieArray: response.data})
    })
    .catch(err=>{
        console.log(err)
    })
})

// GET Method
//Get method to search a specific movie

module.exports = router;