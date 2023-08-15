var database = [
    {
        username: "karol",
        password: "secret"
    },
    {
        username: "john",
        password: "1234"
    },
    {
        username: "pablo",
        password: "4411"
    },
    {
        username: "frenk",
        password: "2233"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired of this learning..."
    },
    {
        username: "Sally",
        timeline: "Js is very nice!"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password");

function signIn(name, pass){
    for(var i = 0; i < database.length; i++){
        if(name === database[i].username && pass === database[i].password){
            console.log(newsFeed);
            return;
        }
        else if(i == (database.length-1)){
            alert("Bad password or username!");
            return;
        }
    }
}

signIn(userNamePrompt, passwordPrompt);