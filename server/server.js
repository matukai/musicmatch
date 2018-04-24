//MODULES
const express = require('express');
const app = express();
const userRoutes = require('./routes/users');

//CONSTANTS
const PORT = process.env.PORT || 8080;

//APPLICATIONS
app.use(express.static('public'));
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});