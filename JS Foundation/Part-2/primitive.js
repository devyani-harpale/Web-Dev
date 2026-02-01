//Number
// we can use typeof() to understand the data type of the variable
let balance = 120;
console.log(typeof(balance));

let anotherBalance = new Number(120);
console.log(anotherBalance);
console.log(typeof(anotherBalance))
 
//Strings 
let myString = 'hello'
let myStringOne = "Holaa"
let oldgreet = myString + " " + "Dev"
let username = 'Devyani'
console.log(oldgreet);

let greetMessage = `Hello ${username}!` //string interpolation
console.log(greetMessage)