function sayHello(){
    console.log("Hellou dude!");
}

function printText(text){
    console.log(text);
}

function multiply(number1, number2){
    return Number(number1) * Number(number2);
}
sayHello();
printText("wtf?");
multiply(10,12);

function LessonLists(){
    var list = ["tiger", "cat", "bear", "bird"];
    console.log(list[0]);
}

var user = {
    name: "John",
    age: "34",
    hobby: "guns",
    city: "Vilnius",
    spells: ["element1", "element2", "element3"]
}

user.isMarried = false;
console.log(user);
