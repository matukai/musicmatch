//CONSTANTS
const express = require('express');
const router = express.Router();
const Artist = require('../database/models/Artist');

router.get('/',(req,res) => {
  return res.render('music artist get route smoke tested')
})


module.exports = router;