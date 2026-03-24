let hostname = "localhost";
let port = 4000;

const express = require('express'); //imports express
const morgan = require('morgan'); //imports morgan

const app = express(); //creates a new Express Application

app.use(morgan('dev')); //For better logging, we use morgan
app.use( express.static('public_html') ); // Static page server will use the folder 'public_html'

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/user",userCont.getAll);
app.get("/user/:uid",userCont.get);
app.post("/user",userCont.postCreateUpdate);
app.get("/deleteuser/:uid",userCont.getDelete);

const server = app.listen(port,hostname,function(){
    console.log(`Server running on ${hostname}:${port}/`);
})