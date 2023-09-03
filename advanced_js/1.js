const array = [1, 2, 10, 16];
const double = [];

const newArray = array.forEach(num => {
    double.push(num * 2);
});

//back home button functionality
const backHome = () => location.href = "index.html";