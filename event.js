// Event – page par koi pan action karo tene ek event rise karshe, page par click, hover, typing all are events

// Event Listener – event nu reaction --- give reaction when click, dblclick, hover, typing

// Add Event Listener
// select --> event ---> function ---> what you change
// element.addEventListener("event_name", function(){})

// ======= Common Events: click, input, change, submit, mouseover, keyup

// Click
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    if (btn.textContent === "Dark Mode") {
        btn.textContent = "Light Mode"
         document.body.style.backgroundColor = "black";
    } else {
         btn.textContent = "Dark Mode"
        document.body.style.backgroundColor = "white";
    }
});

// if i button click and alert box show
let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click",()=>{
alert("Button Clicked")
})

// change div tag color

let button = document.querySelector(".btn2");
let box = document.querySelector(".color-card");

button.addEventListener("click", () => {

    if (button.textContent === "Color Change") {
        button.textContent = "Color change1";
        box.style.backgroundColor = "pink";
        box.style.border="purple"
    } else {
        button.textContent = "Color Change";
        box.style.backgroundColor = "blue";
    }
});


// input
// how to know which is typed ?
let inp = document.querySelector("input");
inp.addEventListener("input", (dets) => {
// console.log(dets);
if (dets.data != null) {
console.log(dets.data);
}
});

