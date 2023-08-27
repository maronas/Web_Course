// change everything below to the newer Javascript!

// let + const
let a = "test";
let b = true;
let c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue",
    city :"Vilnius"
};

const {firstName, lastName, age, eyeColor, city} = person;

var okObj = {
  a,
  b,
  c
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
console.log(message);

// default arguments
// default age to 10;
//in need you can send new values to the functions, if not there are default one
function isValidAge(age = 10) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
// Symbols are important, because they not equal each other, for example barbie != barbie if they are sym1 === sym2 

let sym1 = Symbol('This is my first Symbol');

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

whereAmI(true, true)

const whereAmI2 = (username, location) => username && location ? "I am not lost" : "I am totally lost";

whereAmI2(true, true);

const backHome = () => location.href = "index.html";