/* 
use 'const' as default. 업데이트 하고 싶은 변수만 가끔! let
변수 업데이트 할 일은 생각보다 잘 안 생긴다.
can use 'var'(outdated!!!) instead of 'const' or 'let'
but the browser would not show an error whether we changed the constant variable, which should not be changed.
 */

const a = 10; // const 생성자 사용, lock the variable
const b = 2;
let myName = "sooyeon"; // 생성자 사용으로 변수 생성 변경 가능

// show on the console
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "s.wag"; // 변수 update 때에는 생성자 필요 없음.
console.log("your new name is " + myName);

// 2.4 Booleans

const amIFat = null; // bunch of nothingness, 'None' of python
let something; // exists but undefined (does not have value)
console.log(amIFat);
console.log(something);

// 2.5 Arrays

const mon = "Monday";
const tue = "Tuesday";
const wed = "Wednesday";
const thu = "Thursday";
const fri = "Friday";
const sat = "Saturday";
const sun = "Sunday";

const daysOfWeek = [ mon , tue , wed , thu , fri , sat ];
daysOfWeek.push(sun);
console.log(daysOfWeek);
console.log(daysOfWeek[3]);

const nonsense = [1, 2, "hello", false, null, true, undefined, "sooyeon"];
console.log(nonsense);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("sprite");

// 2.6 Objects

const student = {
    name: "s.wag",
    age: 24,
    attending: true,
};
console.log(student);
console.log(student["name"]);
student.name = 'sooyeon'
console.log(student.name);
student.major = "CSE";
student.age = student.age + 1;
console.log(student);

// 2.7 Functions

function sayHello(nameOfPerson, age){
    console.log("Hello my name is", nameOfPerson);
    console.log("I am", age, "years old.")
}
sayHello("soo", 7);
sayHello("yeon", 17);
sayHello("park", 27);

function plus(firstNum, secondNum){
    console.log(firstNum + secondNum);
}
function minus(firstNum, secondNum){
    console.log(firstNum - secondNum);
}
plus(8, 7);
minus(8, 7);

// 2.8 Functions

const player = {
    name: "sooyeon",
    sayHello: function(otherName){
        console.log("hello!", otherName, "nice to meet you");
    },
};

console.log(player.name);
player.sayHello("s.wag");

// Recap

const calculator = {
    add: function (a, b){
        console.log(a + b);
    },
    sub: function (a, b){
        console.log(a - b);
    },
    mul: function (a, b){
        console.log(a * b);
    },
    div: function (a, b){
        console.log(a / b);
    }
};


