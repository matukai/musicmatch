const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  return res.render('USER BACKEND ROUTE')
})

module.exports = router;