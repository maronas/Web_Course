function excercise7(){
    // Create an object and an array which we will use in our facebook exercise. 

    // 1. Create an object that has properties "username" and "password". Fill those values in with strings.
    var user = {
        username: "player1",
        password: "xrenia",
        timeline: "Jiaghn aghna"
    }
    var user1 = {
        username: "player2",
        password: "abas",
        timeline: "agihnaoiagnia"
    }
    var user2 = {
        username: "player3",
        password: "xdrc",
        timeline: "n;agn agnlalng"
    }

    console.log(user, user1, user2);
    // 2. Create an array which contains the object you have made above and name the array "database".
    var database = [
        user,
        user1,
        user2
    ];

    console.log(database);
    // 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

    var newsfeed = [
        [user.username, user.timeline],
        [user1.username, user1.timeline],
        [user2.username, user2.timeline]
    ];

    console.log(newsfeed);
}