require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5240;

app.get('/', function (req, res) {
    res.send('<center><h3>My First Node APP</h3></center>');
})

app.listen(PORT, function () {
    console.log(`listening on ${PORT}`)
})
