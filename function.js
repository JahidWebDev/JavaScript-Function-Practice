// JavaScript Functions
// Normal Function

// Function -keyworld
// parentheses ()
// (parameters)
// sleep (Arguments) 


// Function Declarations
// function name(parameter1, parameter2, parameter3) {
//     // code to be executed
//   }

// function myFunction(a, b) {
//     return a * b;
//   }


// function sleep (){}
// sleep () 


// function sleep(){
//   console.log("Nabil is sleeping from 11pm");
  
// }
// sleep()


// function sleep(a,){
//   console.log( a + " is sleeping from 11pm");
  
// }
// sleep("Fahim");
// sleep('Ridoy');
// sleep("Nabil")

// function sleep(a, b){
//   console.log( a + " is sleeping from " + b);
  
// }
// sleep("Fahim","11pm");
// sleep('Ridoy', "10pm");
// sleep("Nabil", "9pm")


// Function Return


// function myFunction(a, b) {
//     // Function returns the product of a and b
//     return a * b;
// }
// let x = myFunction(4, 3);
// console.log(x);


// function great(){
//     let name = prompt("What is your name")
//     console.log("Welcome to our website" + name);
    
// }

// great();


// =========================================
// Function Expressions

// const x = function(){}

// const x = function(a,b){
//     return a*b

// }
// console.log(x(5,5));


// const x = function(a,b){
//     return a * b;
// }
// let z = x(5,5);
// console.log(z);


// Function() Constructor

// const myFunction = new Function("a", "b", "return a * b");

// let x = myFunction(4, 3);

// console.log(x);

// ======================================

// Function Hoisting

// myFunction(5);

// function myFunction(y) {
//   return y * y;
// }

// ========================================

// Self-Invoking Functions

// nvoked function expression (IIFE)

// (function(){
//     let x = "hello";
// })()

// function myFunction(a, b) {
//     return a * b;
//   }
  
//   let x = myFunction(4, 3) * 2;

// =======================================

//   Arrow Functions

// ES5
// var x = function(x, y) {
//     return x * y;
//   }

  // ES6
// const x = (x, y) => x * y;

// const x = (a,b) => {
//     return a * b
// }

// console.log(x(5, 5));

// ==========================================

// JavaScript Function Parameters

// function functionPerametar(parameter1, parameter2, parameter3) {

// }

// function z(x, y = 5){
//   return x * y;
// }

// console.log(z(3));


// function a (x, y){
//    return x * y;
// }

// let m = 4;
// let n = 6;

// console.log(a(m,n));


// function a(x){
//   x.one = 5;
//   return x.one * x.two;
// }

// let m = {
//   one: 7,
//   two: 5
// }

// console.log(a(m));
// console.log(a);


// const myObject = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }
// myObject.fullName();


// const person ={
//   fullName: function(){
//     return this.firstName + " " + this.lastNmae;
//   }
// }


// const person1 = {
//   firstName: "jahid",
//   lastNmae: "hasan"
// }

// const person2 = {
//   firstName: "jahid",
//   lastNmae: "hasan"
// }

// console.log(person.fullName.call(person1));



// const person ={
//   fullName: function(city, country){
//     return this.firstName + " " + this.lastNmae;
//   }
// }


// const person1 = {
//   firstName: "jahid",
//   lastNmae: "hasan"
// }

// const person2 = {
//   firstName: "jahid",
//   lastNmae: "hasan"
// }

// console.log(person.fullName.call(person1 ,"Dhaka", "Bangladesh"));
