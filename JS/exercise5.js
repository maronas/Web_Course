function ex5(){

    // Complete the below questions using this array:
    const array = [
        {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
        },
        {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
        },
        {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
        },
        {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
        },
    ];
    const forEachArray = [];

    
    //Create an array using forEach that has all the usernames with a "!" to each of the usernames
    const newArr = array.forEach(element => {
        forEachArray.push(element.username + "!");
    });
    console.log('username + ! = ', forEachArray);
    
    //Create an array using map that has all the usernames with a "? to each of the usernames
    const mapArray = array.map(num => num.username + "?");
    console.log('username + ? = ', mapArray)
    
    //Filter the array to only include users who are on team: red
    const filterArray = array.filter(num => num.team == "red" ? num : "");
    console.log('filter by team: ', filterArray);
    
    //Find out the total score of all users using reduce
    const reduceArray = array.reduce((accumulator, num) => {
        return accumulator + num.score;
    }, 0);
    console.log('reduced array of scores all users', reduceArray);

    //   (1), what is the value of i?
    //   (2), Make this map function pure:
    const arrayNum = [1, 2, 4, 5, 8, 9];
    const newArray = arrayNum.map((num, i) => {
        console.log(num, i);
        return num * 2;
    });
    console.log("new Array: ", newArray);
    
    //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
    const newForEach = [];
   array.forEach(element => {
        element.items = element.items.map(num => num + "!");
        newForEach.push(element);
    });

    console.log('New for each: ', newForEach);
}

(function () {
    var old = console.log;
    var logger = document.getElementById('ex5_log');
    console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
        } else {
            logger.innerHTML += arguments[i] + '<br />';
        }
      }
    }
})();