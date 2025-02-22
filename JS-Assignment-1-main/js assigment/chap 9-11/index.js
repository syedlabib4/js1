 //city
var city=prompt("enter the city name:");
if(city=="karachi"){
   alert("Welcome to the city of lights");
}

//gender
var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am.");
}

//signal
var signal=prompt("Enter the traffic light:" );
if(signal=="red"){
    alert("Must Stop")
}else if(signal=="yellow"){
    alert("Ready to Move");
}else if(signal=="green"){
    alert("move now");
}else{
    alert("invalid color entered");
}

//fuel
var fuel =(prompt("Enter remaining fuel in litres:"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

//checing script

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if(false){
alert("False");
} if("car" < "cat"){
alert("car is smaller than cat");
}


// Marksheet
var subject1 =(prompt("Enter marks obtained in first subject:"));
var subject2 =(prompt("Enter marks obtained in second subject:"));
var subject3 =(prompt("Enter marks obtained in third subject:"));
var totalMarks =(prompt("Enter total marks:"));
var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

alert(`Total Marks: ${totalMarks}\nMarks Obtained: ${obtainedMarks}\nPercentage: ${percentage.toFixed(2)}%\nGrade: ${grade}\nRemarks: ${remarks}`);

//Guess Game
var secretNumber = Math.floor(Math.random() * 10) + 1;
var guess = parseInt(prompt("Guess the secret number (1-10):"));
if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}

// 8. Divisibility Check
var number = (prompt("Enter a number:"));
if (number % 3 === 0) {
    alert("The number is divisible by 3");

 //  Even or Odd Check
var num = (prompt("Enter a number:"))
if (num % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}

//  Temperature Message
var temperature = (prompt("Enter the temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

//  Simple Calculator
let num1 = (prompt("Enter first number:"));
let num2 = (prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /, %):");
let result;
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else if (operation === "%") {
    result = num1 % num2;
} else {
    result = "Invalid Operation";
}
alert(`Result: ${result}`);
}