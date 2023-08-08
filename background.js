var h3 =document.querySelector("h3");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("bg")

function setColor(){
  body.style.background = "linear-gradient(to right,"+ color1.value + ", "+color2.value+")";
  
  //for color code
 h3.innerHTML = "left color code" + color1.value + " <br>" + "right color code" + color2.value
 
}


color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);

setColor()