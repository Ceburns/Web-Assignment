//const DotEnv = require('dotenv');
//DotEnv.config();

require('dotenv').config();

const exApp = require('./app');



const server = exApp.app.listen(process.env.PORT,process.env.HOSTNAME,function(){
    console.log(`Server running on ${process.env.HOSTNAME}:${process.env.PORT}/`);
})