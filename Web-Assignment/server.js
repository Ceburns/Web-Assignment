let hostname = "localhost";
let port = 4000;

const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('Public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const server = app.listen(port, hostname, function(){
    console.log(`Server running at on ${hostname}:${port}/`);
});