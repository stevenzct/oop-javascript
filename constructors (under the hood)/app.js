// constructor functions

function User(username, email){
    this.username = username;
    this.email = email;
    this.login = function(){
        console.log(`${this.username} has logged in`);
    }
}

// class User {
//     constructor(username, email){
        // set up properties
//         this.username (parameter) 
//         this.email = email;
//     }
// }


const userOne = new User('mario', 'mario@thenetninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');

console.log(userOne, userTwo);
userOne.login();

// the 'new' keyword
// 1 - ite creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the functuion to 'build' the object