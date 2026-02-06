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
console.log(data)

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

console.log("--------------------------------------------  .map() Method EXAMPLE")
// EXAMPLE 1
console.log("----------------------- EXAMPLE 1")
const step = [1000, 2000, 3000];
console.log(step)

function doubleSteps(step) {
  return step * 2;
}

const newSteps = step.map(doubleSteps);
console.log(newSteps)

// EXAMPLE 2
console.log("----------------------- EXAMPLE 2")
const minutes = [1, 5, 10];
console.log(minutes)

const seconds = minutes.map(function(min) {
  return min * 60;
});
console.log(seconds)

// EXAMPLE 3
console.log("----------------------- EXAMPLE 3")
const price = [200, 350, 500];
console.log(price)

const finalPrices = price.map(price => price + 50);
console.log(finalPrices)

// EXAMPLE 4
console.log("----------------------- EXAMPLE 4")
const mark = [35, 72, 88, 40];
console.log(mark)

function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}
const grades = mark.map(getGrade)
console.log(grades)

// EXAMPLE 5
console.log("----------------------- EXAMPLE 5")
const name1 = ['rahul', 'neha', 'amit'];
console.log(name1)

const formattedNames = name1.map(name1 =>
  name1[0].toUpperCase() + name1.slice(1)
);
console.log(formattedNames)

// EXAMPLE 6
console.log("----------------------- EXAMPLE 6")
const price1 = [500, 1000, 1500];
console.log(price1)

function applyDiscount(price1) {
  return price1 - price1 * 0.10;
}

const discounted = price.map(applyDiscount);
console.log(discounted)

// EXAMPLE 7
console.log("----------------------- EXAMPLE 7")
const score = [45, 60, 85];
console.log(score)

const finalScores = score.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});
console.log(finalScores);

// EXAMPLE 8
console.log("----------------------- EXAMPLE 8")
const celsius = [0, 20, 30];
console.log(celsius)

function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}

const fahrenheit = celsius.map(toFahrenheit);
console.log(fahrenheit)

// EXAMPLE 9
console.log("----------------------- EXAMPLE 9")
const numbers = [1, 2, 3, 4];
console.log(numbers)

const tableOfTwo = numbers.map(num => num * 2);
console.log(tableOfTwo)

// EXAMPLE 10
console.log("----------------------- EXAMPLE 10")
const balances = [500, 1200, 300];
console.log(balances)

const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);
console.log(messages)

console.log("--------------------------------------------  .filter() Method EXAMPLE")
// EXAMPLE 1
console.log("----------------------- EXAMPLE 1")
const number1 = [1, 2, 3, 4, 5, 6];
console.log(number1)
const evenNumbers = number1.filter(num => num % 2 === 0);
console.log(evenNumbers)

// EXAMPLE 2
console.log("----------------------- EXAMPLE 2")
const ages = [19, 1, 10, 16, 20];
console.log(ages)
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
console.log(adults)

// EXAMPLE 3
console.log("----------------------- EXAMPLE 3")
const inputs = ['Hello', '', 'World', '', 'JS'];
console.log(inputs)
const validInputs = inputs.filter(text => text !== '');
console.log(validInputs)

// EXAMPLE 4
console.log("----------------------- EXAMPLE 4")
const marks2 = [35, 72, 88, 40, 25];
console.log(marks2)
const passedStudents = marks2.filter(marks2 => marks2 >= 40);
console.log(passedStudents)

// EXAMPLE 5
console.log("----------------------- EXAMPLE 5")
const prices1 = [199, 499, 999, 1499, 299];
console.log(prices1)
const affordable = prices1.filter(prices1 => prices1 <= 500);
console.log(affordable)

// EXAMPLE 6
console.log("----------------------- EXAMPLE 6")
const words = ['hi', 'hello', 'javascript', 'ok'];
console.log(words)
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
console.log(longWords)

// EXAMPLE 7
console.log("----------------------- EXAMPLE 7")
const transactions = [200, -100, 500, -50, 300];
console.log(transactions)
const credits = transactions.filter(amount => amount > 0);
console.log(credits)

// EXAMPLE 8
console.log("----------------------- EXAMPLE 8")
const scores1 = [45, 60, 85, 30, 90];
console.log(scores1)
const selectedScores = scores1.filter(scores1 => scores1 >= 50 && scores1 <= 90);
console.log(selectedScores)


console.log("--------------------------------------------  .reduce() Method EXAMPLE")
// EXAMPLE 1
console.log("----------------------- EXAMPLE 1")
const money = [100, 200, 50];
console.log(money )
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
console.log(totalMoney)

// EXAMPLE 2
console.log("----------------------- EXAMPLE 2")
const steps1 = [3000, 5000, 4000, 6000];
console.log(steps1)
function addSteps(total, steps1) {
  return total + steps1;
}
const weeklySteps = steps1.reduce(addSteps, 0);
console.log(weeklySteps)

// EXAMPLE 3
console.log("----------------------- EXAMPLE 3")
const prices3 = [499, 299, 199];
console.log(prices3)
const totalPrice = prices3.reduce((total, prices3) => total + prices3, 0);
console.log(totalPrice)

// EXAMPLE 4
console.log("----------------------- EXAMPLE 4")
const marks3 = [45, 88, 67, 92];
console.log(marks3)
const highest = marks3.reduce((max, marks3) => {
  return marks3 > max ? marks3 : max;
}, marks3[0]);
console.log(highest)

// EXAMPLE 5
console.log("----------------------- EXAMPLE 5")
const words1 = ['Hi', 'Hello', 'JS'];
console.log(words1)
const totalChars = words1.reduce((count, words1) => count + words1.length, 0);
console.log(totalChars)

// EXAMPLE 6
console.log("----------------------- EXAMPLE 6")
const words2 = ['Learning', 'JavaScript', 'is', 'fun'];
console.log(words2)
const sentence = words2.reduce((text, words2) => text + ' ' + words2);
console.log(sentence)

// EXAMPLE 7
console.log("----------------------- EXAMPLE 7")
const marks4 = [35, 72, 88, 40, 25];
console.log(marks4)
const passCount = marks4.reduce((count, marks4) => {
  return marks4 >= 40 ? count + 1 : count;
}, 0);
console.log(passCount)

// EXAMPLE 8
console.log("----------------------- EXAMPLE 8")
const transactions1 = [1000, -200, -300, 500];
console.log(transactions1)
const finalBalance = transactions1.reduce((balance, amount) => balance + amount, 0);
console.log(finalBalance)

// EXAMPLE 9
console.log("----------------------- EXAMPLE 9")
const items = ['Pen', 'Book', 'Pencil'];
console.log(items)
const result1 = items.reduce((text, item) => text + ', ' + item);
console.log(result1)

// ===============================
// MAP + FILTER + REDUCE PRACTICE
// ===============================

// Q1. Shopping App – Discounted Total
const prices6 = [200, 800, 1200, 450, 700];
const total1 = prices6
  .filter(price => price > 500)
  .map(price => price * 0.9)
  .reduce((sum, price) => sum + price, 0);
console.log('Q1 - Total to pay:', total1); // 2430

// --------------------------------------------------

// Q2. Fitness App – Total Active Minutes
const minutes1 = [20, 45, 60, 15, 90];
const totalCalories = minutes1
  .filter(min => min > 30)
  .map(min => min * 5)
  .reduce((total, cal) => total + cal, 0);
console.log('Q2 - Total calories burned:', totalCalories); // 975

// --------------------------------------------------

// Q3. Exam System – Average of Passed Marks
const marks6 = [35, 72, 88, 40, 25, 90];
const passed = marks6.filter(mark => mark >= 40);
const averagePassed = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;
console.log('Q3 - Average of passed marks:', averagePassed); // 72.5

// --------------------------------------------------

// Q4. Salary System – Monthly Payout
const wages = [300, 800, 450, 1000, 600];
const totalPayout = wages
  .filter(wage => wage > 500)
  .map(wage => wage + 100)
  .reduce((total, wage) => total + wage, 0);
console.log('Q4 - Total payout:', totalPayout); // 2600

// --------------------------------------------------

// Q5. Online Course – Completion Points
const progress = [20, 50, 75, 40, 100];
const totalPoints = progress
  .filter(p => p >= 50)
  .map(p => p * 2)
  .reduce((sum, p) => sum + p, 0);
console.log('Q5 - Total points:', totalPoints); // 450

// --------------------------------------------------

// Q6. Bank Transactions – Final Balance
const transactions2 = [1000, -500, 2000, -300, 1500];
const creditedAmount = transactions2
  .filter(amount => amount > 0)
  .map(amount => amount * 1.02)
  .reduce((total, amount) => total + amount, 0);
console.log('Q6 - Final credited amount:', creditedAmount); // 4590

// --------------------------------------------------

// Q7. Game App – Final Score
const scores2 = [30, 60, 90, 45, 80];
const finalScore = scores2
  .filter(score => score > 50)
  .map(score => score + 10)
  .reduce((sum, score) => sum + score, 0);
console.log('Q7 - Final score:', finalScore); // 250

// --------------------------------------------------

// Q8. E-commerce – Total Taxed Amount
const prices2 = [500, 1200, 3000, 800, 1500];
const finalAmount = prices2
  .filter(price => price > 1000)
  .map(price => price * 1.18)
  .reduce((sum, price) => sum + price, 0);
console.log('Q8 - Final payable amount:', finalAmount); // 6746

// --------------------------------------------------

// Q9. Attendance System – Reward Points
const hours = [6, 8, 9, 7, 10];
const rewardPoints = hours
  .filter(hour => hour >= 8)
  .map(hour => hour * 10)
  .reduce((sum, point) => sum + point, 0);
console.log('Q9 - Total reward points:', rewardPoints); // 270

// --------------------------------------------------

// Q10. Interview Brain Teaser ⭐
const numbers1 = [1, 2, 3, 4, 5, 6];
const sumOfSquares = numbers1
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((sum, num) => sum + num, 0);
console.log('Q10 - Sum of squares of even numbers:', sumOfSquares); // 56

// ===============================
// MAP + FILTER + REDUCE – 20 PRACTICE
// ===============================

// Q1. Grocery Store – Total Cost
const prices4 = [50, 120, 300, 80, 200];
const totalCost = prices4
  .filter(p => p > 100)
  .map(p => p * 1.05)
  .reduce((sum, p) => sum + p, 0);
console.log('Q1 - Total cost:', totalCost); // 735

// --------------------------------------------------

// Q2. Fitness App – Weekly Calories
const minutes2 = [10, 25, 40, 15, 60];
const totalCalories2 = minutes2
  .filter(min => min >= 20)
  .map(min => min * 4)
  .reduce((sum, cal) => sum + cal, 0);
console.log('Q2 - Total calories:', totalCalories2); // 520

// --------------------------------------------------

// Q3. Exam Results – Total Passed Marks
const marks5 = [35, 55, 80, 20, 45];
const totalPassedMarks = marks
  .filter(mark => mark >= 40)
  .reduce((sum, mark) => sum + mark, 0);
console.log('Q3 - Total passed marks:', totalPassedMarks); // 180

// --------------------------------------------------

// Q4. Bank App – Total Credits
const transactions4 = [500, -200, 1000, -300, 700];
const totalCredits = transactions4
  .filter(t => t > 0)
  .reduce((sum, t) => sum + t, 0);
console.log('Q4 - Total credits:', totalCredits); // 2200

// --------------------------------------------------

// Q5. Online Sale – Discounted Bill
const prices5 = [800, 1500, 3000, 600, 1200];
const totalPayable = prices5
  .filter(p => p > 1000)
  .map(p => p * 0.85)
  .reduce((sum, p) => sum + p, 0);
console.log('Q5 - Total payable amount:', totalPayable); // 5100

// --------------------------------------------------

// Q6. Attendance – Reward Points
const hours6 = [5, 7, 8, 6, 9];
const totalPoints6 = hours6
  .filter(h => h >= 7)
  .map(h => h * 10)
  .reduce((sum, p) => sum + p, 0);
console.log('Q6 - Total reward points:', totalPoints6); // 240

// --------------------------------------------------

// Q7. Delivery App – Total Distance
const distances7 = [3, 6, 10, 4, 8];
const totalDistance7 = distances7
  .filter(d => d > 5)
  .map(d => d + 1)
  .reduce((sum, d) => sum + d, 0);
console.log('Q7 - Total distance:', totalDistance7); // 26

// --------------------------------------------------

// Q8. Salary System – Final Salary
const salaries8 = [18000, 25000, 30000, 15000];
const totalSalary = salaries8
  .filter(s => s > 20000)
  .map(s => s + 2000)
  .reduce((sum, s) => sum + s, 0);
console.log('Q8 - Total salary payout:', totalSalary); // 59000

// --------------------------------------------------

// Q9. Study App – Total Study Time
const hours9 = [0.5, 1.5, 2, 0.75, 3];
const totalStudyMinutes = hours9
  .filter(h => h > 1)
  .map(h => h * 60)
  .reduce((sum, m) => sum + m, 0);
console.log('Q9 - Total study minutes:', totalStudyMinutes); // 390

// --------------------------------------------------

// Q10. Electricity Usage – Monthly Bill
const units10 = [80, 120, 200, 90, 150];
const totalBill = units10
  .filter(u => u > 100)
  .map(u => u * 6)
  .reduce((sum, b) => sum + b, 0);
console.log('Q10 - Total electricity bill:', totalBill); // 2820

// --------------------------------------------------

// Q11. Game Scores – Final Power Score
const scores11 = [30, 50, 90, 20, 70];
const totalPowerScore = scores11
  .filter(s => s > 40)
  .map(s => s * 2)
  .reduce((sum, s) => sum + s, 0);
console.log('Q11 - Total power score:', totalPowerScore); // 420

// --------------------------------------------------

// Q12. Travel App – Total Fare
const rides12 = [5, 12, 20, 8, 15];
const totalFare = rides12
  .filter(r => r > 10)
  .map(r => r + 50)
  .reduce((sum, r) => sum + r, 0);
console.log('Q12 - Total fare:', totalFare); // 147

// --------------------------------------------------

// Q13. Office Work – Productive Hours
const hours13 = [4, 6, 8, 5, 9];
const totalProductiveMinutes = hours13
  .filter(h => h >= 6)
  .map(h => h * 60)
  .reduce((sum, m) => sum + m, 0);
console.log('Q13 - Total productive minutes:', totalProductiveMinutes); // 1260

// --------------------------------------------------

// Q14. Shopping Cart – Reward Coins
const purchases14 = [300, 800, 1200, 400];
const totalCoins = purchases14
  .filter(p => p > 500)
  .map(p => 10)
  .reduce((sum, c) => sum + c, 0);
console.log('Q14 - Total coins earned:', totalCoins); // 20

// --------------------------------------------------

// Q15. Fuel App – Total Fuel Cost
const liters15 = [3, 6, 10, 4, 8];
const totalFuelCost = liters15
  .filter(l => l > 5)
  .map(l => l * 105)
  .reduce((sum, cost) => sum + cost, 0);
console.log('Q15 - Total fuel cost:', totalFuelCost); // 2940

// --------------------------------------------------

// Q16. Interview Classic – Sum of Cubes
const numbers16 = [1, 2, 3, 4, 5];
const sumOfCubes = numbers16
  .filter(n => n % 2 !== 0)
  .map(n => n ** 3)
  .reduce((sum, n) => sum + n, 0);
console.log('Q16 - Sum of cubes of odd numbers:', sumOfCubes); // 153

// --------------------------------------------------

// Q17. Performance Tracking – Bonus Points
const scores17 = [10, 20, 30, 40, 50];
const average17 = scores17.reduce((sum, s) => sum + s, 0) / scores17.length;
const totalBonusScore = scores17
  .filter(s => s > average17)
  .map(s => s + 5)
  .reduce((sum, s) => sum + s, 0);
console.log('Q17 - Total score with bonus:', totalBonusScore); // 110

// --------------------------------------------------

// Q18. Subscription App – Final Bill
const plans18 = [199, 399, 599, 299];
const totalBill18 = plans18
  .filter(p => p > 300)
  .map(p => p * 1.18)
  .reduce((sum, p) => sum + p, 0);
console.log('Q18 - Final subscription bill:', totalBill18); // 1181.18

// --------------------------------------------------

// Q19. Learning App – Achievement Score
const scores19 = [45, 60, 70, 30, 80];
const totalAchievementScore = scores19
  .filter(s => s >= 60)
  .map(s => s ** 2)
  .reduce((sum, s) => sum + s, 0);
console.log('Q19 - Total achievement score:', totalAchievementScore); // 15800

// --------------------------------------------------

// Q20. Interview Finisher ⭐
const numbers20 = [3, 6, 9, 10, 12];
const totalSum20 = numbers20
  .filter(n => n % 3 === 0)
  .map(n => n * 10)
  .reduce((sum, n) => sum + n, 0);
console.log('Q20 - Total sum:', totalSum20); // 300