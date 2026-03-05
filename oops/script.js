// Object Oriented Javascript
// OOPS
// dar vakhat blueprint banavo ke objectrit is kevo dekhase ane shu properties ane
// methods hase, ane pachi tena upyog thi nava nava objects banvani sakiye chhiye tene j
// kevay chhe Object Oriented Programming
// blueprint(object kevo dekhase, object ma su method) ---> based on blueprint create objects

// blueprint --> constructor
// function based constructor ---> Constructor Function ---> function Name always start with Capital letter

function CreatePencil(name, price, qty, color) {
  this.name = name;
  this.prce = price;
  this.qty = qty;
  this.color = color;

  // write
  this.write = function (msg) {
    let h1 = document.createElement("h1");
    h1.textContent = msg;
    h1.style.color = color;
    console.log(this);

    document.querySelector("body").appendChild(h1);

    // Erase method
    this.erase = function () {
      document.querySelectorAll("h1").forEach((text) => {
        if (text.style.color === this.color) {
          text.remove();
        }
      });
    };
  };
} //blue print

let pencil = new CreatePencil("Doms", 100, 10, "black");
let pencil1 = new CreatePencil("Natraj", 100, 20, "red");
// console.log("Doms Pencil",pencil);

// jo construction function koi field tena prototype
// ma add (attech) kari de to te field badha object ma available
// thase

CreatePencil.prototype.shape = "round";

// what is prototype: prototype is a property of function which is
// used to add new field to all the object created by that function

// Class in JavaSctipt
// class is a syntatical sugar over construction function, class ma apde constructor function no upyog kariye chhiye
// why use class: class is more readable and easier to understand than construction function

class CreatePen {
  constructor(name, price, qty, color) {
    // what is constructor: constructor  is a special method which
    // is called when an object is called when an object is cretaed, it is used to initialize
    // the object

    // why use constructor: constructor is used to intialized the
    // object, it is called automatically when an object is created,
    // it is used to set the initial values of the object

    this.name = name;
    this.prce = price;
    this.qty = qty;
    this.color = color;

    // write
    this.write = function (msg) {
      let h1 = document.createElement("h1");
      h1.textContent = msg;
      h1.style.color = color;
      console.log(this);

      document.querySelector("body").appendChild(h1);

      // Erase method
      //   this.erase = function () {
      //     document.querySelectorAll("h1").forEach((text) => {
      //       if (text.style.color === this.color) {
      //         text.remove();
      //       }
      //     });
      //   };
    };
  } //blue print
}

let pen = new CreatePen("cello", 160, 10, "green");
let pen1 = new CreatePen("reynold", 200, 10, "red");
// extends ---> super
// create a new class that hold old class value and also have some new values
// copy old class and add new value

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = "user";
  }
}

let user = new User("test", "test@gmail.com", "abc@123");
console.log("user", user);

class Admin extends User {
  constructor(name, email, password, rights) {
    super(name, email, password); // extends class contructor --> super
    this.role = "admin";
    this.rights=rights;
  }
}

let admin = new Admin(
  "admin",
  "admin@gmail.com",
  "abc@123",
  "delete user, edit user , create user",
);
console.log(admin);

