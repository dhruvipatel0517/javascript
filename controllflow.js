// Control Flow Statements in JavaScript

// If-Else Statement (if, if else, if else-if else)
// if (condition) {} --> condition true hoy to {} code run
if (12 < 13) {
  console.log(true);
}

if (15 < 13) {
  console.log(true);
} // condition is false that why if statement not run

if (!12) {
  console.log("number");
}

if (!0) {
  console.log("number");
}

// if-else Statement

if (12 < 13) {
  console.log(true);
} else {
  console.log(false);
}

if (15 < 13) {
  console.log(true);
} // condition is false that why if statement not run
else {
  console.log(false); // if if statement condition is false then run this code
}

if (!12) {
  console.log("number");
} else {
  console.log("Not A Number");
}

let loggedin = true;
let admin = false;
if (loggedin && admin) {
  console.log("welcome admin");
} else if (loggedin) {
  console.log("welcome user");
} else {
  console.log("go to login page");
}

// SELF EXAMPLE

let apple = true;
let mango = true;
let tomato = false;
if (apple && mango) {
  console.log("Both are fruits");
} else if (apple && tomato) {
  console.log("One or Both values Diffrent");
} else {
  console.log("NONE OF THIS");
}

// Switch case Statement
switch (
  "Blackfriday" // value --> Cse value sathe match larshe
) {
  case "First50":
    console.log("50% off on first order");
    break;

  case "BOGO":
    console.log("Buy one get one");
    break;

  case "BlackFriday":
    console.log("It's Black Friday Sale - get at Rs. 50");
    break;

  default:
    console.log("offer Not Vaild");
    break;
}

// SELF EXAMPLE

switch ("capital") {
  case "capital":
    console.log("This statements is Capital letters");
    break;

  case "Small":
    console.log("This statements is Capital letters");
    break;

  case "mixletters":
    console.log("This statements not included capital and small letters");
    break;

  default:
    console.log("NONE OF THESE");
    break;
}

// Early Return Pattern
function score(value) {
  if (value > 90) {
    return "value is more than 90";
  } else if (value > 80) {
    return "Value is More than 80";
  } else if (value > 70) {
    return "Value is More than 70";
  } else if (value > 60) {
    return "Value is More than 60";
  } else {
    return "Value is less than 60";
  }
}
score(55);
console.log(score(55));

function score1(value) {
  if (value > 90) return "value is more than 90";
  else if (value > 80) return "value is more than 80";
  else if (value > 70) return "value is more than 70";
  else if (value > 60) return "value is more than 60";
  else return "value is less than 60";
}
score(75);
console.log(score(75));

// EXAMPLE 1

let x = 2;
switch (x) {
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
}

// EXAMPLE 2

// Write a function getGrade(score) that:
// Takes A student's score as input (0 to 100)
// Returns the grade based on below logic:
// 90-100 A+
// 80-89 A
// 70-79 B
// 60-69 C
// 33-59 D
// 0-32 Fail
// Anything Else Invalid Marks

let score1 =prompt("")

function getGrade(score1) {
  if (score >= 90 && score1 <= 100) {
    return "A+";
  }
  if (score >= 80 && score1 <= 89) {
    return "A";
  }
  if (score >= 70 && score1 <= 79) {
    return "B";
  }
  if (score >= 60 && score1 <= 69) {
    return "C";
  }
  if (score >= 33 && score1 <= 59) {
    return "D";
  }
  if (score >= 0 && scor1 <= 32) {
    return "Fail";
  }
  return "Invalid Marks";
}

// Get and display grade
let grade = getGrade(score1);
alert("Grade: " + grade1);

// EXAMPLE 3

// Rock-Paper-Scissors
// rock - scissors --> rock
// paper - rock --> paper
// scissors - paper --> scissors

function rps(user, computer){
    if(user === "rock" && computer === "scissor") return "user wins";
    if(user === "scissor" && computer === "paper") return "user wins";
    if(user === "paper" && computer === "rock") return "user wins";
    if(user === "scissor" && computer === "rock") return "computer wins";
    if(user === "rock" && computer === "paper") return "computer wins";
    if(user === "paper" && computer === "scissor") return "computer wins";
    return "it's a tie"
}