const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  return res.render('user get')
})

module.exports = router;