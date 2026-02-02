// loops -- repeating code blocks
// 1 1 1 1 1 1
// 1 2 3 4 5 6

// for loop
// why use for-loop? when you know how many times you want to repeat a block of code
// print 1 to 10 --> console.log(1); console.log(2); ... console.log(10);
// kaya thi javanu chhe --> kaya sudhi javanu chhe --> kevi rite javanu chhe
// for (ex. 1 -> 50 -> increment by 1)
//(start; end; change)

// console.log("-----------1------------")
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// console.log("-----------2------------")
// for (let k = 9; k >= 0; k--) {
//   console.log(k);
// }

// console.log("-----------3------------")
// for (let j = 1; j <= 5; j++) {
//   document.writeln("Hello");
//     console.log("HELLO")
// }


// while loop -- do while loop
// kaya thi javanu chhe --> kaya rokavanu chhe --> kevi rite javanu chhe
// while (ex. 1 -> Hello world -> stop when condition false)
// start
// while (end){
//code
// change
//}
// let j = 1;

// while (j <= 10) {
//     console.log("WHILE LOOP :", j);
//     j++;
// }

// make it true loop
// let d = 50;
// while (d >= 20){
//     console.log(d);
//     d--;
// }

// let c=30;
// while (c > 20){
//     console.log(c);
//     c--;
// }

// let d= 1;
// while (d <= 5){
//     console.log("HELLO");
//     d++;
// }


// let f = 50;
// while (f <= 60) {
//     console.log(f);
//     f--;
// }

// let q = 50;
// while (q <= 60){
//     console.log(q);
//     --q;
// }

// do while loop
// do {} while (end);
// start
// do{
//code
//change}
//while(end);

// let g = 10 ;
// do {
//     console.log("do while : ", g);
//     g++;
// }while (g <= 20);

// let h = 10;
// do {
//     console.log("do while :",h);
//     h--;
// } while (h >= 1);

// let d = 0;
// while (d < 20) {
//     console.log("Hello");
//     d++;
// }

// let f1 = 50;
// while (f1 <= 60) {
//     console.log(f1);
//     f1++;
// }

// let q = 60;
// while (q >= 1) {
//     console.log(q);
//     q--;
// }

// do while loop
// do {} while (end);
// start
// do{
// code
// change}
// while(end);

let j1 = 12; // start
do {
    console.log("do while loop:", j1); // code
    j1++; // change (condition)
} while (j1 < 20); // while check after executing code block (end)

let m = 20;
do {
    console.log("do while loop:", m);
    m--;
} while (m >= 10);

// break
for (let k = 1; k <= 201; k++) {
    console.log("Loop with break", k);
    if (k == 20) {
        break;
    }
}

// continue
for (let a = 1; a <= 10; a++) {
  if (a === 5) {
    continue;
  }
  console.log(a);
}



// Example 1:

console.log("Print number from 1 to 10 using a for loop.");
for (let b1=1;b1<=10;b1++){
    console.log("Print 1 to 10 number", b1);
}

// Example 2:

console.log("Print number from 10 to 1 using while loop.");
let c=10;
while(c>=1){
    console.log("Print 10 to 1 number", c);
    c--;
}

// Example 3:

console.log("Print even numbers from 1 to 20 using for loop.");
for (let d = 1; d <= 20; d++) {
    if (d % 2 === 0) {
        console.log("Even number:", d);
    }
}
// let d1=2;
// for (let d1=2 ; d1<=20 ; d1+=2){
//     console.log("Even number:", d1);
// }