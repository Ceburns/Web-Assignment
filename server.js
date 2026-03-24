let meals = [
{name: "Caitlin Burns", email: "ceburns1@loyola.edu", mealType: "Entree", meal: "Chicken Parmesan"},
{name: "John Doe", email: "johndoe@icloud.com", mealType: "Appetizer", meal: "Caesar Salad"},
{name: "Jane Doe", email: "janedoe@gmail.com", mealType: "Entree", meal: "Grilled Salmon"},
{name: "Emily Evans", email: "emily@loyola.edu", mealType: "Dessert", meal: "Tiramisu"},
{name: "Jill Renda", email: "jill@verizon.net", mealType: "Side", meal: "Garlic Mashed Potatoes"},
{name: "Michael Smith", email: "michaelsmith@aol.com", mealType: "Appetizer", meal: "Bruschetta"},
{name: "Maureen FitzGerald", email: "maureen@icloud.com", mealType: "Dessert", meal: "Chocolate Lava Cake"},
{name: "David Lee", email: "davidlee@gmail.com", mealType: "Entree", meal: "Beef Wellington"}
];

let hostname = "localhost";
let port = 4000;

const http = require('http');
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('Public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/menuReq", function(req, res){
    res.status(200);
    res.send(meals);
    res.end();
});

app.get("/menuReq/:email", function(req, res){
    let email = req.params.email;

    let meal = null;
    for(let i = 0; i < meals.length; i++){
        if(meals[i].email === email){
            meal = meals[i];
            break;
        }
    }

    if(meal != null){
        res.status(200);
        res.send(meal);
    } else {
        res.status(404);
        res.send({msg: 'Meal with this email does not exists'});
    }
    res.end();
});

app.post("/menuReq", function(req, res){
    let name = req.body.txt_name;
    let email = req.body.txt_email;
    let mealType = req.body.txt_mealType;
    let meal = req.body.txt_meal;

    let pos = -1;
    for(let i = 0; i < meals.length; i++){
        if(meals[i].email === email){
            pos = i;
        }
    }

    if(pos >= 0){
        console.log("Update...");
        let newMeal = {name: name, email: email, mealType: mealType, meal: meal};
        meals[pos] = newMeal;
    } else {
        console.log("Insert...");
        let newMeal = {name: name, email: email, mealType: mealType, meal: meal};
        meals.push(newMeal);
    }

    res.redirect("/menuReqs.html");
});

app.get('/deletemeal/:email', function(req, res){
    let email = req.params.email;

    let pos = -1;
    for(let i = 0; i < meals.length; i++){
        if(meals[i].email === email){
            pos = i;
            break;
        }
    }

    if(pos >= 0 && pos < meals.length){
        meals.splice(pos, 1);
    }

    res.redirect("/menuReqs.html");
});

app.listen(port, hostname, function(){
    console.log(`Server running on ${hostname}:${port}`);
});





