//  // function
// // what -->  function is a block of code that performs a specific task.
// // why -->  to avoid code repetition and to make code modular and reusable.
// // how -->  function keyword, name, parameters, body,return statement

// // type of functions:
// // function name(params) {} --> function declaration
// function abc() {}
// // let fnc = function (){} --> function expression
// let fnc = function () {};
// // let fnc = () => {} --> arrow function --> fat arrow function
// let fnc1 = () => {};

// function temp_cart() {
//     console.log("Adding Product");
// }
// temp_cart();
// temp_cart();
// temp_cart();

// // parameters vs arguments

// // parameters are the names listed in the function definition (params --> () ni andar lakheli values)

// // arguments are the real values passed to the function (args --> function call karti () ni andar lakheli(pass) kareli values)
// console.log("------------------- Function Declaration");
// function cart(product,price) {
//     // product  -- parameter
//     console.log("Product :- ",product);
//     console.log("Price :- ",price);
// }
// cart("Mobile",50000);  // mobile & Price -- argument
// cart("Laptop",100000);
// cart("Tablet",25000);

// // convert into function expression
// console.log("------------------- Function Expression");
// // let fnc = function (){} --> function expression
// // let fnc = function () {};

// let  cart1 = function (product,price) {
//     console.log("Product :- ",product);
//     console.log("Price :- ",price);
// }
// cart1("Mobile",50000);  // mobile & Price -- argument
// cart1("Laptop",100000);
// cart1("Tablet",25000);

// // convert into arrow function
// console.log("------------------ Arrow Function");
// let  cart2 = (product,price) => {
//     console.log("Product :- ",product);
//     console.log("Price :- ",price);
// }
// cart2("Mobile",50000);  // mobile & Price -- argument
// cart2("Laptop",100000);
// cart2("Tablet",25000);

// // Default, rest and spread parameters in function

// console.log("----------------------------- Default, rest and spread parameters in function")
// // default
// console.log("------------------ Default Parameters");
// function abc(v1, v2){
//   console.log(v1, v2);
// }
// abc(20, 21);

// console.log("---------------- With Default Parameters");
// function cart3(product = "product", price = "price"){
//   console.log(product, price)
// }

// cart3("Mobile", 50000);
// cart3();  // will take default values
// cart3("Laptop"); // price will be default
// cart3(undefined, 100000); // product will be default

// console.log("------------------ Rest Parameters");

// // rest ---> Jayre function ma multiple arguments pass karva to vadhare params banava
// // pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest ---> ...)
// // jo function na parameter ni andar lakhvama aave chhe)

// function abcd(v1, v2, v3, v4, v5, v6) {
//   console.log(v1, v2, v3, v4, v5, v6);
// }

// abcd(1, 2, 3, 4, 5, 6);

// function abcd1(...numbers) {
//   console.log(numbers);
// }

// abcd1(1, 2, 3, 4, 5, 6); // how to handle multiple arguments

// function abcd2(v1, v2, ...numbers) {
//   console.log(v1, v2, numbers);
// }

// abcd2(1, 2, 3, 4, 5);

// // return or early return
// //return  --> function mathi value bahar mokalva mate

// console.log("------------------ Return or Early Return");
// function getValue1(value) {
//   if (value < 25) return "Value is less than 25";
//   else if (value < 50) return "Value is less than 50";
//   else if (value < 75) return "Value is less than 75";
//   else if (value < 100) return "Value is less than 100";
//   return "Value is 100 or more";
// }

// let result = getValue1(80);
// console.log(result);

// first Class Function:
// function can be treated as variable
// let fnc= function(){}
// let fnc = () =>{}
// let buyNow1 = function (product, price) {
//   console.log(product, price);
// };
// buyNow1("S24 FE", 50500);

// // Convert into arrow function

// let buyNow2 = (product, price) => {
//   console.log(product, price);
// };
// buyNow2("S24 Ultra", 105500);

// // function can be passed as arguments to other functions|
// // let fnc = function(){}
// // fnc(function(){})
// console.log(
//   "------------------ Function can be passed as arguments to other functions",
// );
// function abc1(v1, v2) {
//   console.log(v2);
//   return v1();
// }
// abc1(function () {
//   console.log("first class function");
// }, "Hello");

// console.log(
//   "---Second example of Function can be passed as arguments to other functions",
// );
// function abc2(v1, v2) {
//   console.log(v2);
//   return v1();
// }
// abc2(function () {
//   console.log("Second class function");
// }, "Hello");

// // function can be returned from other function

// console.log("------------------ Function can be returned from other function");

// function abc() {
//   return function () {
//     console.log("function within function");
//   };
// }
// abc()();

// function abc2() {
//   return () => {
//     console.log("arrow function within function");
//   };
// }
// abc2()();

// // higher order function (HOF)
// // function that takes another function as an argument or returns a
// // function as a result (eva function je return kare ek function athava
// // acpect kare ek function params ma)

// // function abcd(val){val();}
// // --> abcd(function(){console.log("hello")})
// // function abcd(val){} --> higher order function

// // function abcd(){ return function(){} } abcd()() --> higher order

// // pure vs impure function
// // pure function --> function je same input par same output aapse ane
// // koi bahar na state ne modify na kare (pure function --> je
// // function bahar na state ne modify na kare)

// console.log("--------------pure function");
// let a = 20;
// function change_a() {
//   return "a not change (pure function): " + a;
// } //-pure function

// console.log(change_a());

// // impure function --> function je same input par different output aapse athava bahar na state
// // ne modify kare (impure function --> je function bahar na state ne modify kare )

// console.log("--------------impure function");
// function change_a1() {
//   a++;
//   return "a change (impure function): " + a;
// } //-impure function

// console.log(change_a1());

// console.log("--------------impure function with 2 additions");

// let a1 = 30;
// function change_a2() {
//   a1 += 2;
//   return "a change (impure function): " + a1;
// } //-impure function

// console.log(change_a2());

// // closure function
// // function je potana parent function na variables ne access kari
// // shake (return thava valo function use karshe parent function na koi
// // variable) (function within function)

// function outer() {
//   let outer_var = "Outer Function Variable";
//   function inner() {
//     console.log(outer_var);
//   }
//   inner();
// }
// outer();

// //lexical scope --> nested function can access variables declared in
// // their outer scope
// console.log("--------------lexical scope");
// function outer1() {
//   let outer_var = "Outer Function Variable";
//   function inner1() {
//     console.log(outer_var);
//     let inner_var = "Inner Function Variable";
//     function most_inner() {
//       console.log(outer_var);
//       console.log(inner_var);
//     }
//     most_inner();
//   }
//   inner1();
// }
// outer1();

// // SELF EXAMPLE

// console.log("--------------self study Function Example");
// function Outer2()
// {
//   let outer_var="Outer variable in Outer2 function";
//   function inner_2()
//   {
//     let inner_var="Inner variable in inner2 function";
//     function inner_3()
//     {
//       console.log(outer_var);
//       console.log(inner_var);
//       console.log("Inner function within inner2 function");
//       function most_inner()
//       {
//         console.log(outer_var);
//         console.log(inner_var);
//       }
//       most_inner();
//     }
//     inner_3();
//   }
//   inner_2();
// }
// Outer2();



// // IIFE - Immediately Invoked Function Expression
// (function () {})(); // function je declare karta j call thai jaye
// (function () {
//   console.log("IIFE executed");
// })();


// // Hoisting in function
// // use case --> show project structure
// temp_fnc();

// function temp_fnc(){
//   console.log("hoisting in function")
// }

// EXAMPLE 2 :

greet();
function greet(){
    console.log("Hello!");
}

// EXAMPLE 3 :

let add = (a, b) => {
    return a + b;
}

// EXAMPLE 4 :

function welcome(name){
    console.log("Welcome " + name);
}welcome("user");

//EXAMPLE 5 :
function temp (a, b, c){
    console.log(a,b,c);
}temp(1, 2)

// EXAMPLE 6 :
function temp_user(name = "Guest"){
    console.log("Hello " + name);
}temp_user();

// EXAMPLE 7 :

function number(...numbers){
    console.log(numbers);
}number(1, 2, 3, 4, 5)

// EXAMPLE 8 :

function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}

function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}calculateTotal(10, 20 ,30 ,40 ,50)
let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)
console.log("Total Score: " + sumtotal);

// EXAMPLE 9 :

function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}
checkAge(15);

// EXAMPLE 10 :

function f(){
  return;
}
console.log(f());