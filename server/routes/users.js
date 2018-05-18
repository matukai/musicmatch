const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  return new User ()
  .then(allUsers => {
    console.log('ALL USERS',allUsers)
  })
})

router.post('/', (req,res) => {
  return new User ()
  .then()
})

module.exports = router;