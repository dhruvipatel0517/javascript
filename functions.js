 // function
// what -->  function is a block of code that performs a specific task.
// why -->  to avoid code repetition and to make code modular and reusable.
// how -->  function keyword, name, parameters, body,return statement


// type of functions:
// function name(params) {} --> function declaration
function abc() {}
// let fnc = function (){} --> function expression
let fnc = function () {};
// let fnc = () => {} --> arrow function --> fat arrow function
let fnc1 = () => {};

function temp_cart() {
    console.log("Adding Product");
}
temp_cart();
temp_cart();
temp_cart();

// parameters vs arguments

// parameters are the names listed in the function definition (params --> () ni andar lakheli values)

// arguments are the real values passed to the function (args --> function call karti () ni andar lakheli(pass) kareli values)
console.log("------------------- Function Declaration");
function cart(product,price) {
    // product  -- parameter
    console.log("Product :- ",product);
    console.log("Price :- ",price);
}
cart("Mobile",50000);  // mobile & Price -- argument
cart("Laptop",100000);
cart("Tablet",25000);

// convert into function expression
console.log("------------------- Function Expression");
// let fnc = function (){} --> function expression
// let fnc = function () {};

let  cart1 = function (product,price) {
    console.log("Product :- ",product);
    console.log("Price :- ",price);
}
cart1("Mobile",50000);  // mobile & Price -- argument
cart1("Laptop",100000);
cart1("Tablet",25000);


// convert into arrow function
console.log("------------------ Arrow Function");
let  cart2 = (product,price) => {
    console.log("Product :- ",product);
    console.log("Price :- ",price);
}
cart2("Mobile",50000);  // mobile & Price -- argument
cart2("Laptop",100000);
cart2("Tablet",25000);

// Default, rest and spread parameters in function

console.log("----------------------------- Default, rest and spread parameters in function")
// default
console.log("------------------ Default Parameters");
function abc(v1, v2){
  console.log(v1, v2);
}
abc(20, 21);

console.log("---------------- With Default Parameters");
function cart3(product = "product", price = "price"){
  console.log(product, price)
}

cart3("Mobile", 50000);
cart3();  // will take default values
cart3("Laptop"); // price will be default
cart3(undefined, 100000); // product will be default


console.log("------------------ Rest Parameters");

// rest ---> Jayre function ma multiple arguments pass karva to vadhare params banava
// pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest ---> ...)
// jo function na parameter ni andar lakhvama aave chhe)

function abcd(v1, v2, v3, v4, v5, v6) {
  console.log(v1, v2, v3, v4, v5, v6);
}

abcd(1, 2, 3, 4, 5, 6);

function abcd1(...numbers) {
  console.log(numbers);
}

abcd1(1, 2, 3, 4, 5, 6); // how to handle multiple arguments

function abcd2(v1, v2, ...numbers) {
  console.log(v1, v2, numbers);
}

abcd2(1, 2, 3, 4, 5);

// return or early return 
//return  --> function mathi value bahar mokalva mate

console.log("------------------ Return or Early Return");
function getValue1(value) {
  if (value < 25) return "Value is less than 25";
  else if (value < 50) return "Value is less than 50";
  else if (value < 75) return "Value is less than 75";
  else if (value < 100) return "Value is less than 100";
  return "Value is 100 or more";
}

let result = getValue1(80);
console.log(result);


// first Class Function
// function can be treated as variables

// function can be passed as arguments to other functions

// function can be returned from other functions
console.log("------------------ First Class Function");