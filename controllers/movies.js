const express = require('express')
const router = express.Router()
const axios = require('axios')
const db = require('../models')
router.use(express.urlencoded({extended: false}))

// GET Method
// Get all the movies
router.get('/', (req, res)=>{
    let movie = req.query.movie
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${movie}`)
    .then((response)=>{
        console.log(response.data.Search)
        res.render('results', {searchArray: response.data.Search})
    })
    .catch(err=>{
        console.log(err)
    })
})

// GET Method
// Get all the fav movies
router.get('/faves', (req, res)=>{
    db.fave.findAll()
    .then((favorites)=>{
        res.render('faves', {favorites: favorites})
    })
})

// GET Method
// Get movies by id
router.get('/:movie_id', (req, res)=>{
    let movieId = req.params.movie_id
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${movieId}`)
    .then((response)=>{
        // fs.writeFileSync('results.json', JSON.stringify(response.data))
        // let movieArray = fs.readFileSync('results.json')
        // let movieData = JSON.parse(movieArray)
        console.log(response.data)
        res.render('show', {movieData: response.data})
    })
    .catch(err=>{
        console.log(err)
    })
})

// POST Method
// Post movies to the faves page
router.post('/faves', (req, res)=>{
    console.log('Form Data: ', req.body)
    db.fave.create(req.body)
    .then(createdFave=>{
        res.redirect('faves')
        console.log(createdFave)
    })
})


module.exports = router;