function sayHello() {
    console.log("Hello");
}
sayHello();

// Operators - Discount Percentage

let listingPrice = 799;
let sellingPrice = 199;
let discountPercent = ((listingPrice-sellingPrice)/listingPrice)*100;
console.log("Discount Percentage is: " + discountPercent);
displayDiscountPercentage = Math.round(discountPercent);
console.log(displayDiscountPercentage + "% off");
var result = listingPrice>sellingPrice;
console.log(result);
console.log(typeof result);


var temp = 20;
var result = temp<20;
console.log(result);

//Logical Operators

let email = true;
let facebook = false;
let google = true;
if(email||facebook||google){
    console.log("Login Success");
}
else{
    console.log("Login Fail");
}

if(email&&facebook&&google){
    console.log("Login Success");
}
else{
    console.log("Login Fail");
}

//Ternary Operators
//condition ? true : false;

let authenticated = true;
let authenticated1 = false;

authenticated?console.log("Success"):console.log("Fail");
authenticated1?console.log("Success"):console.log("Fail");


//Switch Case
// let user = "sub-admin";
// switch (user) {
//     case "admin":
//         console.log("Full acces");
//         break;
//     case "sub-admin":
//         console.log("Full acces fot course");
//         break;
//     default:
//         console.log("Trail User");
//         break;
// }

// FAlsy Values

let user = null;
if (user) {
console.log("Condition is true");
}
else{
    console.log("Conditio is False");
}
let user1 = "null";
if (user1) {
console.log("Condition is true");
}
else{
    console.log("Conditio is False");
}
let user2 = "";
if (user2) {
console.log("Condition is true");
}
else{
    console.log("Conditio is False");
}

console.log(2+2);
console.log(2+"2");
console.log(2+parseInt("2"));
console.log("2"+"2");

function sayHello(name) {
    console.log("Hello ,hitesh");
    console.log("Hello,",name);
}
sayHello();

function sayHello(name) {
    console.log("Hello there, hitesh");
    console.log(`Hello There ${name}. How are you???`);
}
sayHello("hitesh");
sayHello("sammy");

function namasthey() {
    return "Hello India";
}
var greetings = namasthey();
console.log(greetings);
console.log(namasthey());

function getUserRole(name,role){
    switch (role) {
        case "admin":
        return `${name} is admin with full  acess`;
        case "sub-admin":
        return `${name} is subadmin with full  acess of Courses`;
        
        default:
        return `${name} is a trial User`;
        }
}
console.log(getUserRole("hitesh","admin"));
console.log(getUserRole("Sammy","sub-admin"));
let getRole = getUserRole("sai","ad");
console.log(getRole);


Project 1
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>LearnCodeOnline.in</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <img
        height="100px"
        src="https://learnyst.s3.amazonaws.com/assets/schools/2410/resources/images/Group_2_4y5b8p.png"
        alt=""
      />
      <h1 class="counter">1000</h1>
      <p class="followers">Followers</p>
    </div>
    <script src="script.js"></script>
  </body>
</html>

var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;
setInterval( () => {
    if( count<1000 ){
        count++;
        counter.innerText = count;
    }
}, 1
)

setTimeout ( () => {
    followers.innerText = "Follwers on Instagram"
}, 5800

)
body {
  background: rgb(66, 66, 66);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 44px;
  text-align: center;
  color: aliceblue;
}
.description {
  transition: 0.9s ease-in-out;
}

Project 2
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>LearnCodeOnline</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="color-hover">
      <div class="color red"></div>
      <div class="color cyan"></div>
      <div class="color violet"></div>
      <div class="color orange"></div>
      <div class="color pink"></div>
    </div>
    <div class="center"></div>
    <script src="./scripts.js"></script>
  </body>
</html>

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

// var color = getBGColor(pink);

// pink.addEventListener("mouseenter", () => {
//   center.style.background = color;
// });

const magicColorChanger = (element, color) => {
  return element.addEventListener("click", () => {
    center.style.background = color;
  });
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));








body {
  background: rgb(66, 66, 66);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.red {
  background: #e44236;
  margin-right: 5px;
}
.cyan {
  background: #25ccf7;
  margin-right: 5px;
}
.violet {
  background: #8b78e6;
  margin-right: 5px;
}
.orange {
  background: #ea7773;
  margin-right: 5px;
}
.pink {
  background: #bb2cd9;
}

.center {
  min-width: 400px;
  height: 400px;
  background: rgb(66, 66, 66);
  /* border-radius: 100%; */
  transition: 0.2s ease-in-out all;
}
.color-hover {
  position: absolute;
  top: 10%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.text {
  padding: 10px;
  color: #ffffff;
}
.color {
  width: 120px;
  height: 30px;
  border-radius: 5%;
  margin-bottom: 30px;
}
.color:hover {
  cursor: pointer;
}
.color:last-child {
  margin-bottom: 0;
}

var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

User.prototype.getFirstname = function () {
  console.log(`Your firstname is : ${this.firstName}`);
};

var hitesh = new User("hitesh", 2);
hitesh.getCourseCount();

if (hitesh.hasOwnProperty("firstName")) {
  hitesh.getFirstname();
}

//console.log(hitesh);

var sam = new User("Sam", 1);
sam.getCourseCount();
sam.getFirstname();
//console.log(sam);

var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

User.prototype.getFirstname = function () {
  console.log(`Your firstname is : ${this.firstName}`);
};

var hitesh = new User("hitesh", 2);
hitesh.getCourseCount();

if (hitesh.hasOwnProperty("firstName")) {
  hitesh.getFirstname();
}

//console.log(hitesh);

var sam = new User("Sam", 1);
sam.getCourseCount();
sam.getFirstname();
//console.log(sam);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// const myStates1 = ["Rajasthan", "Delhi", 1947, "Assam", "TN", "Maha"];
// for (let i = 0; i <=myStates1.length; i++) {
//     console.log(i);
// }

// const myStates2 = ["Rajasthan", "Delhi", 1947, "Assam", "TN", "Maha"];
// for (let i = 0; i <=myStates2.length; i++) {
//     console.log(myStates2[0]);
// }

// const myStates3 = ["Rajasthan", "Delhi", 1947, "Assam", "TN", "Maha"];

// for (let i = 0; i <myStates3.length; i++) {
//     console.log(myStates3[i]);
// }

// for (let i = 0; i < myStates3.length; i++) {
//     if(typeof myStates3[i] !== "string")
//        continue;
//     console.log(myStates3[i]);
// }
// for (let i = 0; i < myStates3.length; i++) {
//     if(typeof myStates3[i] === "string")
//        continue;
//     console.log(myStates3[i]);
// }

// for (let i = 0; i < myStates3.length; i++) {
//     if(typeof myStates3[i] !== "string")
//        break;
//     console.log(myStates3[i]);
// }

// const myStates = ["Rajasthan", "Delhi", 1947, "Assam", "TN", "Maha"];
// myStates.forEach ((s) => (console.log(s)));

// const names = ["youtube", "Amazon", "Hai", "Instagram", "facebook"];
// console.log(names);
// for (const n of names)
// console.log(n);

const symbols = {
    yt: "youtube",
    fb: "Facebook",
    id: "Instagram",
    lco: "Learn Code Online"
};
for ( const n in symbols)
// console.log(n);
// console.log(symbols[n]);
console.log( `The Key is: ${n} and its Value is: ${symbols[n]}.`);

var user = {
    fName: "hit",
    lName: "chou",
    loginCount: 34,
    role: "Admin",
    facebookSignedSignedIn: true
};
console.log(user.fName);
console.log(user["fName"]);
user.loginCount = 44;
console.log(user.loginCount);
console.table(user)


// var name = "hitesh";
// console.log("LINE 3" , name);
// function sayName() {
//     var name = "MR. H";
//     console.log("LIne 6", name);
// }
// sayName();


// var name = "hitesh";
// console.log("LINE 3" , name);
// function sayName() {
//     // var name = "MR. H";
//     console.log("LIne 6", name);
// }
// sayName();


var name = "hitesh";
console.log("LINE 3" , name);
function sayName() {
    // var name = "MR. H";
    console.log("LIne 6", name);
    sayNameTwo();
    function sayNameTwo(){
        var name = "Hai";
        console.log("Line11", name)
    }
}
sayName();

console.log(this);

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Part 2</title>
</head>

<body>
    <h1>Helo World</h1>
    <p id="js"></p>
    <script>
        // Alert
        // alert("Hello world")
        // setTimeout(() => {
        //     alert("Hello javaSCRIPT DEVELOPER")
        // }, 2000);

        // CONFIRM BOX
        // let val = confirm("Are You Sure ?")
        // if (val) {
        //     document.getElementById("js").innerHTML = "He/She Pressed OK"
        // }
        // else {
        //     document.getElementById("js").innerHTML = "He/She Pressed Cancel"

        // }

        // prompt
        let value1 = prompt("SOlve This 20 - 10");
        if (value1 == 10) {
            document.getElementById("js").innerText = "Success"
        }
        else {
            document.getElementById("js").innerText = "Fail"
        }

    </script>
</body>

</html>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM | JavaScript</title>
</head>

<body>
    <h1>Hello World</h1>
    <p class="fsjs">Full Stack JavaScript - Class</p>
    <!-- <p id="fsjs2">Full Stack JavaScript - ID</p> -->
    <ul>
        <li>one</li>
        <li>Two</li>
    </ul>

    <ul>
        <li class="tech">JavaScript</li>
        <li class="tech">Nodejs</li>
        <li class="tech">Reactjs</li>
    </ul>
    <script>
        // console.log(document)
        // console.log(window.document)
        // console.log(document.documentElement)

        // console.log(document.head)
        // console.log(document.body)
        // console.log(document.body.firstElementChild)
        // let val = document.getElementById("fsjs2")
        // console.log(val.innerText)
        // console.log(val.innerHTML)

        let val = document.getElementsByClassName("tech")
        console.log(val)
        console.log(val[0].innerText)
        console.log(val[1].innerText)
        val[1].innerHTML = "Anurag"
        val[2].innerText = "<h1>Hello Hitesh Sir</h1>"

        // - by tag name
        //     - by tag
        // Query Selector
        let h1 = document.querySelector("#fsjs2").innerText
        console.log(h1)

        // Skip // let value = (document.querySelector("p").style.backgroundColor = "red")

    </script>

</body>

</html>
















