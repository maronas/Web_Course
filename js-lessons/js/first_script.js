var first = prompt("Enter first number");
var second = prompt("Enter second number");
var move = prompt("What to do(+,-,/,%) ?");
if(move === "+")
    result = Number(first) + Number(second);
else if(move === "-")
    result = Number(first) - Number(second);
else if(move === "/")
    Number(first) / Number(second);
else if(move === "%")
    Number(first) / Number(second);
alert("The result of: " + first + move + second + "=" + result);