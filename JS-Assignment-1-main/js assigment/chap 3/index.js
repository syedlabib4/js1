var age = 25; // Change this to your age
alert("I am " + age + " years old.");


//visit counter
var visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);
document.write("<p>You have visited this site " + visitCount + " times.</p>");

//  Declare birthYear variable & display in browser
var birthYear = 2000; // Change this to your birth year
document.write("<p>My birth year is " + birthYear + ".</p>");
document.write("<p>Data type of my declared variable is " + typeof birthYear + "</p>");

//  Visitor order details
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write("<p>" + visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.</p>");
