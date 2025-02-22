// Character Type Check
var char = prompt("Enter a character (number or letter):");
var charCode = char.charCodeAt(0);
if (charCode >= 48 && charCode <= 57) {
    alert("It is a number.");
} else if (charCode >= 65 && charCode <= 90) {
    alert("It is an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
    alert("It is a lowercase letter.");
} else {
    alert("Invalid character.");
}

//  Find Larger Integer
var num1 = (prompt("Enter first integer:"));
var num2 = (prompt("Enter second integer:"));
if (num1 > num2) {
    alert(`${num1} is larger.`);
} else if (num2 > num1) {
    alert(`${num2} is larger.`);
} else {
    alert("Both numbers are equal.");
}

//  Positive, Negative, or Zero
var number = (prompt("Enter a number:"));
if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

//  Vowel Check
var vowelChar = prompt("Enter a single character:").toLowerCase();
var vowels = ["a", "e", "i", "o", "u"];
alert(vowels.includes(vowelChar));

// Password Validation
var correctPassword = "secret123";
var userPassword = prompt("Enter your password:");
if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password");
}

//Fixed If/Else Statement
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);

// Time Conversion
var time = (prompt("Enter time in 24-hour format (e.g., 1900):"));
if (time >= 0 && time < 1200) {
    alert("Good Morning");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
} else {
    alert("Invalid time format");
}
