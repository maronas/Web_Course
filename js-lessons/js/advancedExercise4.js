//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3);

//Result will be 13, because that 10 is x, 3 is y and they are send to the function addTo


//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);


//Currying: What does the last line return?
const sum2 = (a, b) => a + b;
const curriedSum2 = (a) => (b) => a + b;
const add51 = curriedSum2(5);
add51(12);

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);

//What are the two elements of a pure function?

const backHome = () => location.href = "index.html";