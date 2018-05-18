//MODULES
const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const artistRoutes = require('./routes/artists');
const path = require('path');
const bodyParser = require('body-parser');

//CONSTANTS
const PORT = process.env.PORT || 8080;

//APPLICATIONS

//bodyParser for routes req.body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/users', userRoutes);
app.use('/artists', artistRoutes);

// server smoke test
// app.get('/', (req,res) => {
//   res.send('smoke')
// })

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});