var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomBtn1 = document.querySelector(".button1");
var randomBtn2 = document.querySelector(".button2");
var btnHome = document.querySelector(".btnHome");
var body = document.getElementById("gradient");
var background = window.getComputedStyle(body).backgroundImage;
var currentBackground = document.querySelector("h3");

var c1, c2;
var calculate = 0;
var end = false;
var comas = 0;

findRGB();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randomBtn1.addEventListener("click", randomColor1);
randomBtn2.addEventListener("click", randomColor2);

btnHome.addEventListener("click", function(){
    location.href = "../index.html";
});

color1.value = rgbToHex(c1[0], c1[1], c1[2]) + "";
color2.value = rgbToHex(c2[0], c2[1], c2[2]) + "";

setGradient();


function randomColor1(){
    color1.value = "#" + randomColor();
    setGradient();
}

function randomColor2(){
    color2.value = "#" + randomColor();
    setGradient();
}

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    currentBackground.innerText = "Background: " + body.style.background + "";
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(Number(r)) + componentToHex(Number(g)) + componentToHex(Number(b));
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function findRGB(){
    for(var i = 0; i < background.length; i++){
        if((background[i] + background[i + 1] + background[i + 2]) == "rgb" && !end){
            c1 = findRgbColor(i);
            i = calculate;
            end = true;
        }
        else if((background[i] + background[i + 1] + background[i + 2]) == "rgb" && end){
            c2 = findRgbColor(i);
            break;
        }
    }
}

function findRgbColor(index){
    var result = ["", "", ""];

    for(var j = index; j < background.length; j++){
        if(!isNaN(background[j]) && background[j] != "," && background[j] != " " && comas == 0){
            result[0] += background[j];
        }
        else if(background[j] == "," && comas == 0){
            comas = 1;
        }
        else if(!isNaN(background[j]) && background[j] != "," && background[j] != " "  && comas == 1){
            result[1] += background[j];
        }
        else if(background[j] == "," && comas == 1){
            comas = 2;
        }
        else if(!isNaN(background[j]) && background[j] != "," && background[j] != " "  && comas == 2){
            result[2] += background[j];
        }
        else if(background[j] == "," && comas == 2){
            comas = 2;
        }
        else if(background[j] == ")"){
            calculate = j;
            comas = 0;
            return result;
        }
    }
}

function randomColor(btn){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    if(randomColor.length == 6){
        return randomColor;
    }
}