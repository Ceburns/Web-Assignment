const http = require('http');

const server= http.createServer(function(request, response){

    // 200 = ok, indicates response will be text/html
    response.writeHead(200,{"Content-type":"text/html"});

    // actual response in html
    response.write("<h1>Hello NodeJS World!</h1>");
    response.write("<h2> CS456- Web Programming </h2>");

    // indicates we have finished writing our response
    response.end();

});

server.listen(4000,"localhost");// actually runs the server
console.log("server running on 4000");