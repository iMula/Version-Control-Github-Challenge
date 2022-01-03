//created variable that holds the HTML p tag mytext
var info = document.querySelector("#myText");

//this is the same 
info.innerHTML = "spiderman was good!";
//as
document.document.querySelector("#myText").innerHTML = "spiderman was good!";

/////////////////////Actual Cookie Clicker Code

//variable
//this variable keeps track of number of clicks
var numberofClicks = 0;

//accessing the cookie image in the html
var cookie = document.querySelector("#myCookie");

//what happens when we click cookie. the onclick function handles what happens when the reference element is clicked 
//this calls the addClick function
cookie.onclick = addClick


//function that adds 1 to the number of clicks
function addClick(){
    numberofClicks = numberofClicks + 1;
    info.innerHTML = numberofClicks;

}
