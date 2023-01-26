let user = ["Hadi", 20, 129, "Karachi"];
//------------------------------------------------ OLD WAY to decleare a variable using array indexes
let name0 = user[0];
let age = user[1];
let streetNo = user[2];
let city = user[3];
console.log(`Your name is ${name0} and your age is ${age}, your street number is ${streetNo} and your city is ${city}`);


let user1 = ["Raza", 21, 128, "North-Karachi"];
//------------------------------------------------ NEW WAY to decleare a variable using array indexes
let [name1, age1, streetNo1, city1] = user1;        // All variables are decleared in one line
console.log(`Your name is ${name1} and your age is ${age1}, your street number is ${streetNo1} and your city is ${city1}`);


//------------------------------------------------- This is also a NEW WAY to decleare a variable using array indexes
let user2 = ["Hasan", 24, 127, "Kolachi", ["Ali", 22] ];
let [name2, age2, streetNo2, city2, [name3, age3]] = user2;
console.log(`Your name is ${name2} and your age is ${age2}, your street number is ${streetNo2} and your city is ${city2} and your brother name is ${name3} and his age is ${age3}`);