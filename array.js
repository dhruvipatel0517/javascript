// Array -- Hold multiple values at same time
// ["Mobile", "Laptop", "Tablet", 5000, 25, 588 ]
// ["a", "b", "Hello"]
// [2, 4, 5, 6]

// create
// variable_name = [values]
let arr = [1, 2, 3, 4];
console.log(arr);

// access
// position = [0 1 2 3]
// access
// array_name[position / index]
arr[0];

// modify
// array_name[position] = new value
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
console.log(arr);

// Array Methods:
// push, pop, shift, unshift, splice, slice, reverse, sort
// push --> enter new value into array -- place it into last
let a = [1, 2, 3, 4, 5];
console.log(a);

// variable || function.method --> koi variable ke function in
// pachhal dot (.) kari ne lakho to te method kevai
a.push(700);
console.log(a);

// pop --> remove last value into array
a.pop();
console.log(a);

// use case -- enter new producats into existing producats list
console.log("Self Example");
let products = ["mobile", "laptop", "smart-watch", "clock", "TV"];
console.log(products);

console.log("-------------------- last add value with using push");
products.push("AC", "refrigrator");
console.log(products);

// use case -- remove last producat you add into your list
console.log("-------------------- last remove value with using pop");
products.pop();
console.log(products);

//shift -- remove first value into Array
console.log("-------------------- first remove value with using shift");
let c = [30, 40, 50, 60];
c.shift();
console.log(c);

// unshift -- add value into array -- first
console.log("-------------------- first add value with using unshift");
let d = [52, 35, 65, 85];
d.unshift(20);
console.log(d);

// use case -- remove old producat automatic after sometimes
console.log("Self Example");
let product = ["mobile", "laptop", "smart-watch", "clock", "TV"];
console.log(product);

console.log("-------------------- first remove value with using shift");
product.shift();
console.log(product);

// use case -- add a value into top of that data you receive
console.log("-------------------- first add value with using unshift");
product.unshift("Washing Machine");
console.log(product);

// splice - remove value into array -- specific position and
// specific number of values
// into () - first index(position), how many value you want to
// remove
console.log("splice");
let e = [50, 60, 30, 40, 10];
e.splice(2, 2);
console.log(e);
// e.splice(3, 0, 50, 100)

// slice - copy values from array -- specific position and specific number of values
// new variable = array_name.slice(start index, end index)
// start index -- include into copy
// end index -- not include into copy
console.log("slice");
let f = [100, 50, 25, 0, 70, 80];
let new_f = f.slice(3, 5);
console.log(f);
console.log(new_f);

// use case -- select msg and remove multiple msg at on click
console.log("-------------------- use case splice Example");
let msg = ["OK", "THANK YOU", "NICE", "GOOD", "VERY GOOD", "Hyee"];
msg.splice(2, 3);
console.log(msg);

// use case -- copy specific data and save it into new variable
console.log("-------------------- use case slice Example");
let msg_s = ["OK", "THANK YOU", "NICE", "GOOD", "VERY GOOD", "Hyee"];
let new_msg = msg.slice(1, 3);
console.log(msg_s);
console.log(new_msg);

// generate a report based on date and generate a file or save the file into your local machine

// splice vs slice
// splice -- remove value into main array or modify new array
// slice -- copy value from main array and create a new array that hold the value that you can into

// reverse -- reverse value of array
let g = [25, 30, 35, 40, 85];
g.reverse();
console.log(g);

// sort -- set into ascending order
let h = [50, 20, 80, 10, 40];
h.sort();
console.log(h);

// use case -- show latest update first into your fronted
a1 = [12, 6, 48, 2, 58, 34, 9, 39, 66, 14];
a1.reverse().sort();
console.log(a1);

let h1 = [11, 62, 3, 4, 25];
let sr = h1.sort(function (a, b) {
  return a - b; // ascending order
});

console.log("------------------- TASKS 1");
let tasks = ["Wake up", "Brush teeth"];
tasks.push("Bath");
console.log(tasks);

console.log("------------------- TASKS 2");
let notifications = ["Email", "Message", "Reminder"];
notifications.pop();
console.log(notifications);

console.log("------------------- TASKS 3");
let customers = ["Customer1", "Customer2", "Customer3"];
customers.shift();
console.log(customers);

console.log("------------------- TASKS 4");
let playlist = ["Song B", "Song C"];
playlist.unshift("Song A");
console.log(playlist);

console.log("------------------- TASKS 5");
let students = ["Mike", "Alex", "Emma", "Sophia"];
students.splice(1, 1, "john", "sara");
console.log(students);

console.log("------------------- TASKS 6");
let menu = ["Burger", "Pizza", "Pasta", "Salad"];
menu.splice(1, 2);
console.log(menu);

console.log("------------------- TASKS 7");
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let week = days.splice(5, 7);
console.log(week);

console.log("------------------- TASKS 8");
let levels = ["Easy", "Medium", "Hard"];
levels.reverse();
console.log(levels);

console.log("------------------- TASKS 9");
let scores = [45, 12, 78, 34, 89];
scores.sort();
console.log(scores);

console.log("------------------- TASKS 10");
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
console.log(prices);

console.log("------------------- TASKS 11");
let products1 = ["Laptop", "Phone", "Tablet", "Monitor", "Keyboard"];
let new_pro = products1.slice(0, 3);
console.log(new_pro);

console.log("------------------- TASKS 12");
let colors = ["Red", "Green", "Blue", "Yellow"];
colors.splice(2, 1, "purple", "orange");
console.log(colors);

console.log("------------------- TASKS 13");
let steps = ["Step 1", "Step 2", "Step 3"];
steps.reverse();
steps.reverse().push("Final step");
console.log(steps);

console.log("------------------- TASKS 14");
let names = ["alice", "Bob", "charlie", "David"];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names);

console.log("------------------- TASKS 15");
let movies = ["Avatar", "Titanic", "Gladiator"];
movies.unshift("Inception");
movies.shift();
movies.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(movies);

console.log("------------------- TASKS 16");
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);
console.log(nums1);

console.log("------------------- TASKS 17");
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
console.log(nums2);
console.log(result);

console.log("------------------- TASKS 18");
let letters = ["a", "b", "c"];
let reversedLetters = letters.reverse();
console.log(letters);
console.log(reversedLetters);

console.log("------------------- TASKS 19");
let arr1 = ["x", "y", "z"];
arr1.splice(1, 0, "new");
console.log(arr1);

console.log("------------------- TASKS 20");
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
console.log(values);
console.log(sliced);

console.log("------------------- TASKS 21");

console.log("------------------- TASKS 22");
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
console.log(arr2);

// For Each Loop
// for Each -- Array ni darek value mate loop chalse
console.log("------------------- For Each");
let i = [10, 35, 40, 68];
console.log(i);

i.forEach((val) => {
  let new_val = val + 10;
  console.log(new_val);
});

[5, 58, 42, "Hello"].forEach((val) => {
  let new_arr = val + 2;
  console.log(new_arr);
});

// .map() Method:
// map tyare j use karvu ke jyare ek new array create karvo chhe
// first map create a black array -- only for understanding
console.log("------------------- .map() Method");
let data = [10, 20, 50, 40, 15];

// same like a for each loop but map return a new array
let temp_data = data.map((val) => {
  if (val >= 15) {
    return val;
  }
});
console.log(temp_data);

// use case -- data ma thi specific data new array ma store karvo hoy

// ex. product ma thi specific category na product new array ma store karva hoy
// if you want to show only electronics producat on your homepage

// if you want to show only electronics producat on your homepage
console.log("----------------------------- .map() with Conditional Logic");
let marks = [10, 5, 20, 25, 15];
let final_marks = marks.map((val) => {
  if (val == 5) {
    return val + 4;
  } else {
    return val;
  }
});
console.log(final_marks);

// filter
// filter tyare use karvu ke jyare ek new array create karvo chhe with condition
// in return true/false
// if true --> add into new array
// if else(false) --> not add into new array
console.log("-------------------- Filter Example");
let laptops_price = [15000, 20000, 30000, 65000, 99000, 45000];
console.log(laptops_price);

let expensive_laptops = laptops_price.filter((price) => {
  if (price > 30000) return true;
});
console.log(expensive_laptops);

// use case -- data ma thi specific data new array ma store karvo hoy based on condition

// ex. poduct ma thi specific price na producat new array ma store karva hoy
// if you want to show only expensive producat on your homepage
// if you want to filter producat based on price

let product_type = ["Mobile", "Tablet", "Laptop", "Mouse", "Keyborad"];
console.log(product_type);

let filter_product_type = product_type.filter((type) => {
  if (type == "Mobile" || type == "Laptop") return true;
});
console.log(filter_product_type);

// reduce
// reduce tyare j use karvu ke jare ek single value calculate karvi hoy from array
let total_price = [10, 68, 45, 58, 52, 48];

let final_price = total_price.reduce((accumulator, val) => {
  return accumulator + val;
}, 0); // intial value of accumulator

// 0 + 10 => 10
// 10 + 68 => 78
// 78 + 45 => 123

console.log("Final Price :- ", final_price);
//accumulator --> je value function ma retun thase te accumulator ma
// store thase --> accumulator name change kari sako cho
// val --> array ni darek value

//use case -- data ma thi ek single value calulate

// karvi hoy ex. producat ma thi total price calculate karvi hoy

// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element --> callback no return value nahi
// never returns what you return inside it
// returns the array element itself --- not return array
// find() stops at the first match
// It does not continue looping

let product_all = ["Laptop", "Mobile", "Tablet", "Desktop", "Smart Watch"];
let find_product = product_all.find((item) => {
  //   console.log("can't find product"); // not working why??

  if (item === "Desktop") {
    return true;
  } else if (item === "Smart Watch") {
    return true;
  } else {
    return "Not Found";
  }
});

// use case -- data ma thi ek value find karvi hoy based on condition

// ex. producat ma thi specific producat find karvo hoy based on name

// find vs filter
// Real-life Scenario: Shopping Mall Security
// your are a security guard at a shopping mall
// check the list of visitors
let people = ["John", "Sara", "Mike", "Anna","David", "Sara"];

// find ---> you are looking for the first person named "Sara" in the list and stop searching 
// (Pehli var j male, bas e j and Anagal check ij na kare)

let person = people.find((name) => name === "Sara");
console.log(person);

//filter --> you want to find all visitors named "sara" in the list (all data check kare and list na end sudhi check kare)
let Allsara = people.filter((name) => name === "Sara");
console.log(Allsara);

// some
// check kare chhe ke array ma koi pan ek item condition satisfy kare chhe ke nahi

// condition true aave tyare stop kare
// some() vs find() --> some() can't return you valueits return true or false, find() return value of array
// give ans in true and false
console.log("---------------- Some example")
let marks1 = [10, 20, 35, 90];
console.log(marks1)
let any= marks1.some(function (val) {
    if (val < 10) return true;
    // if (val < 85) return "need improvement";
});
console.log(any)

// use case -- check if some product are out of stock in you cart

// every
// check kare chhe ke array ma baddha j items
// condition satisfy kare chhe ke nahi
// true -- baha items condition match kare
// false -- ek pan fail thay to
console.log("---------------- Every example")
let def = [20, 30, 40, 50];
console.log(def)
let num = def.every(function(val){
    return val < 60;
})
console.log(num)

// use case --> check all student is pass or not

// some(), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop", "Mobile"]

// method    --> condition         --> output

// .some()   --> item === "Mobile" --> true
// .find()   --> item === "Mobile" --> "Mobile"
// .filter() --> item === "Mobile" --> ["Mobile","Mobile"]
// .every()  --> item === "Mobile" --> false


// Destructuring operator -- give value to variable
// (ex. we don't use everytime arr[1], just save it
// into variable let j, k) = arr1)

let arr4 = [1, 2, 3, 4, 5]
let [j, , ,k, ] = arr4; // --> desthucturing
// let [j, , k] = arr;

console.log(j,k);

let user_data=["text","text@gmail.com","Male","surat"]
let [ ,z, ,x] = user_data;
console.log(z,x)

// spread oprator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];

// let arr4 = arr3;  // - just give reference not copy value 
// (when you change into arr4 that will be change arr3 too)

let arr9 = [...arr8];

// ... --> rest --> into function
// ... --> spred --> into Array
