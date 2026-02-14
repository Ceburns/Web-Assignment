let item; // auxiliary variable
const myArray = [1, 2, 3]; // array of integers
myArray.push(4); // myArray = [1,2,3,4]
item = myArray.pop(); // item = 4, myArray = [1,2,3]
myArray.unshift(5); // myArray = [5,1,2,3]
item = myArray.shift(); // item = 5, myArray = [1,2,3]
delete myArray[1]; // myArray = [1,null,3]
myArray.splice(2,0,6,7,8); // myArray = [1,null,6,7,8,3]
myArray.splice(1,2); // myArray = [1,7,8,3]
item = myArray.indexOf(7); // item = 1
item = myArray.indexOf(10); // item = -1
myArray.sort(function(a,b){return a-b;}); myArray=[1,3,7,8]
myArray.reverse(); myArray=[8,7,3,1]

const emptyObj = {};
const nullObj = null;

const prof = {name: 'Prof. H. Rocha', department: 'CS', 
    email:'hsrocha@loyola.edu', nerd:true, yearsExperience:15,
courses:["CS456","CS496","CS451","CS482"],
address:{street: "4501 N Charles St", zip:21210},
ssn:null
}

console.log(prof.name); //only prints prof name

prof.age = 0; //adds new attribute


console.log( emptyObj === nullObj ); // false
console.log( emptyObj == {} ); // false
console.log( nullObj === null ); // true
console.log( prof !== null ); // true
