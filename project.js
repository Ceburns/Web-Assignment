function showMore(){
    document.getElementById("menuForm").setAttribute("style", "display: block;");
}

function hideMenu(){
    document.getElementById("menuForm").setAttribute("style", "display: none;");

}
function hideReviews(){
    document.getElementById("reviews").setAttribute("style", "display: none;");
}
function showReviews(){
    document.getElementById("reviews").setAttribute("style", "display: flex;");
}

function resetForm(){
    document.getElementById("fname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mealType").value = "0";
    document.getElementById("meal").value = "";
}

function checkField(){
    var name = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var mealType = document.getElementById("mealType").value;
    var meal = document.getElementById("meal").value;

    if(name === "" || email === "" || mealType === "0" || meal === ""){
        window.alert("Please fill out all fields before submitting");
        return false;
    }
    window.alert("Request submitted successfully");
    return true;
}