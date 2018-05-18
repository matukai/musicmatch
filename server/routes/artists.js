const express = require('express');
// const Artist = require('../database/models/Artist');
const router = express.Router();

router.get('/', (req,res) => {
  return res.send('ARTIST BACKEND ROUTE');
})

router.post('/', (req,res) => {
  // return new Artist (req.body)
  // .save()
  // .then(newArtist => {
  //   return res.json(newArtist)
  // })
  // .catch(err => {
  //   return res.json({
  //     message: err.message
  //   })
  // })
})

module.exports = router;