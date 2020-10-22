const express = require('express')
const router = express.Router()
const fs = require('fs')
const axios = require('axios')

router.get('/', (req, res) => {
    //Retrieves form
    res.render('home.ejs')
})

router.post('/', (req, res) => {
    //make the API call
    console.log('Here is req body',req.body)
    let movieTitle = req.body.title
    let movieId = req.body.imdbID
    //using title parameter only returns a single title at a time but I was having trouble with my API key. If you want to return multiple results, swap &s= in for &t= in line below
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${movieTitle}`)
    .then(response => {
        let movieResults = response.data
        console.log(movieResults)
        res.render('results.ejs',{movieResults: movieResults})
    })
    .catch(err => {
        console.log(err)
    })
})

router.get('/:movie_id', (req, res) => {
    let movieIndex = req.params.movie_id
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${movieIndex}`)
    .then(response => {
        let movieData = response.data
        console.log(movieData)
        res.render('show.ejs', {omdbID: movieIndex, movieData: movieData})
    })   
})

module.exports = router