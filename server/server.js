const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', './public');
// const port = process.env.PORT || 3002;
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
 
 app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
 });
// app.listen(port, () => {
//    console.log('Server is up!');
// });

app.listen(port, function() {
  console.log("Server started succesfully");
});            