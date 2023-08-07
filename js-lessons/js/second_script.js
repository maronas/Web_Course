var age = prompt("Hi! Enter your age dude:");
var message = "empty";
if(age < 18){
        message = "Sorry, you are too young to drive this car. Powering off";
}
else if(age ==18){
        message = "Congratulations on your first year of driving. Enjoy the ride!";
}else{
        message = "Powering On. Enjoy the ride!";
}
alert(message);