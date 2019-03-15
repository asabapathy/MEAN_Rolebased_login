const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');



const api = require('./routes/api');
const port = 3000;

const app = express();
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

app.use('/api', api);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// Testing Purpose
//app.get('/', function(req, res){
//   res.send('Hello From Server');
//});

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});