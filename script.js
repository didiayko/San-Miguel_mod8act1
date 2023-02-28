let fname = prompt("Please enter your full name: ");
let username = prompt("Please enter your username here: ");
let gender = prompt("Please enter your gender here: \nM or F");
let desc = prompt("Please enter a short description of yourself: ");
let year = prompt("Please enter your birth year here: ");
let cage = yeartoage(year);
let pfp = prompt("Do you want to change your profile pic? Upload a picture: \n'wow.jpg'")


document.getElementById("fname").innerHTML = fname;
document.getElementById("username").innerHTML = username;
document.getElementById("gender").innerHTML = gender;
document.getElementById("desc").innerHTML = desc;
document.getElementById("year").innerHTML = year;
document.getElementById("age").innerHTML = cage;
document.getElementById("ppic").setAttribute("pfp");


function yeartoage(year){
    return 2023 - year;
}