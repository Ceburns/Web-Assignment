const fs= require('fs');//file system

// code 1
console.log("Initializing...");

//IO
fs.readFile("node.txt",function(err,content){
    if(err) return console.error(err);

    //code 2 - IO result
    console.log(content.toString());

});




// code 3
console.log("finished");