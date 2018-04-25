//MODULES
const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const artistRoutes = require('./routes/artists');
const path = require('path');

//CONSTANTS
const PORT = process.env.PORT || 8080;

//APPLICATIONS
app.use(express.static('public'));
app.use('/users', userRoutes);
app.use('/artists', artistRoutes);
// app.use(
//   express.static(path.join(__dirname, 'public'), {
//       etag: false
//   })
// );
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});