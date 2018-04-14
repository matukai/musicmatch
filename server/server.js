//MODULES
const express = require('express');
const app = express();
//CONSTANTS
const PORT = process.env.PORT || 8080;
//APPLICATIONS
app.use(express.static('public'));
app.get('/',(req,res) => {
  res.send('smoke tested')
})
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
})