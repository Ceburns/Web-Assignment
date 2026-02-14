function someHello(){
    return "Hello JS World!";
}

var alertHello = function(){
    window.alert( "New" + someHello());
}
function add(x,y){
    return x+y;
}

var add2 =function(a,b){
    return a+b;
}

var arrowAdd= (x,y) => x+y;

var arrow2 = (a,b) => {
    return x+y;
}

var areYouSure = function(){
    return window.confirm("Are you sure you want to continue?");

}

function external(){ // external function
     let num = 10; // local variable of this function
    
     const inner = function(){ // inner function
	   return num+1; // return to external
     } // end of inner function
	num = inner(); // calling the inner function
	num = inner(); 
	return num; // return to caller, num = 12;
  }

let port = 4000;
let hostname = "205.155.68.1";

let connection = `http://${hostname}:${port} `;
console.log(connection);



    
