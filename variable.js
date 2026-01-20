// words vs keywords

// variable -- temp data store

// var, let and const 

// var (ES5)

var a = "temp";
var _123 = "Hello";
var $123 = "HELLO";

// var 123 = "number"
b = 24; // never use

// let (ES5)
let temp_d = "abc";

// const (ES6)
const temp_const ="Dhruvi";

// declaration and intialization

var d; // declare
var d=17 // declare and intialize

//var add value into window
//var is function scoped
//variable can be redeclared and reassigned

var name="USER NAME";
let name1="user name";

//reassign and redeclaration

var temp = 12;
temp = "number"; // Reassignment
var temp = "text"; // Redeclaration

// let temp_a = 24;
// var temp_a = 24; //you can't redeclar let variable

// const temp_b = "name";
// temp_b = "username" // you can't reassign const 

// Scope (Global , Block , Functional)

//  WITH VAR KEYWORD
var e = 25; // Global Scope
console.log("Global Scope : " +e);
{
    var e = 23; // Block Scope
    console.log("Block Scope : " +e);
}
function abc()
{
    var e = 30; // Functinal Scope
    console.log("Functional Scope : " +e);
}
abc()
console.log("Outside WITH var KEYWORD : " +e);


//  WITH VAR KEYWORD
let f = 25; // Global Scope
console.log("Global Scope : " +f);
{
    let f = 23; // Block Scope
    console.log("Block Scope : " +f);
}
function abc()
{
    let f = 30; // Functinal Scope
    console.log("Functional Scope : " +f);
}
abc()
console.log("Outside WITH let KEYWORD : " +f);

// Var vs Let differnce 

// var print Block Scope Value While
// let print Global Scope Value 

// Temporal Dead Zone (TDZ)
console.log(h);
var h = 24;

// console.log(g);
console.log(j);
let j = 12;

// Hoisting Imapact
// Hoisting --> when your create a vaiable into js that braek
// into two part first is declare part that go to up and there
// initialization part that go down

var temp_c = 12;
// var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go to down (means stuck into line 66)
// if you use console.log before initialization that give you undefined


