/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Mehrnoosh Sarang
* Student ID: 1284982227
*
********************************************************************************/

var fullName = "Mehrnoosh Sarang";
var numCourses = 4;
var programName = "Cpp";
var hasPartTimeJob = false;

console.log("My name is " + fullName + " and I'm in the " + programName + " program. I'm taking " + numCourses + " courses this semester.");

if (hasPartTimeJob) {
  hasPartTimeJob = "have";
} else {
  hasPartTimeJob = "don't have";
}

console.log("My name is " + fullName + " and I'm in the " + programName + " program. I'm taking " + numCourses + " courses this semester and I " + hasPartTimeJob + " a part-time job now.");

var currentYear = 2018;
var userAge = prompt("Please enter your age:");
var birthYear = currentYear - userAge;
var yearsToStudy;

console.log("You were born in the year " + birthYear);

yearsToStudy = prompt("Enter the number of years you expect to study in college:");

console.log("You will graduate from Seneca College in the year " + (parseInt(currentYear) + parseInt(yearsToStudy) - 1));

var celsiusTemp = -5;
var fahrenheitTemp = celsiusTemp * 9 / 5 + 32;

console.log(celsiusTemp + "°C is " + fahrenheitTemp + "°F");

fahrenheitTemp = 50;
celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;

console.log(fahrenheitTemp + "°F is " + celsiusTemp + "°C");

console.log("\n\nTask4\n");

for (var i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

function largerNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

var greaterNum = function(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

var number1 = 5;
var number2 = 7;
console.log("The larger number between " + number1 + " and " + number2 + " is " + largerNumber(number1, number2));
number1 = 14;
number2 = 9;
console.log("The larger number between " + number1 + " and " + number2 + " is " + largerNumber(number1, number2));
number1 = 1;
number2 = 3;
console.log("The greater number between " + number1 + " and " + number2 + " is " + greaterNum(number1, number2));
number1 = 11;
number2 = 6;
console.log("The greater number between " + number1 + " and " + number2 + " is " + greaterNum(number1, number2));

function evaluateAverage(...scores) {
  var average = 0;
  for (var i = 0; i < scores.length; i++) {
    average += scores[i];
  }
  average /= scores.length; // Calculate average
  return average >= 50;
}

console.log("Average greater than or equal to 50: " + evaluateAverage(60, 70, 80));
console.log("Average greater than or equal to 50: " + evaluateAverage(30, 50, 40));
console.log("Average greater than or equal to 50: " + evaluateAverage(45, 50, 55));

var userScore;
var calculateGrade = function(score) {
  if (score >= 80) return "A";
  else if (score >= 70) return "B";
  else if (score >= 60) return "C";
  else if (score >= 50) return "D";
  else return "F";
};
userScore = 90;
console.log("Score: " + userScore + "/ Grade: " + calculateGrade(userScore));
userScore = 70;
console.log("Score: " + userScore + "/ Grade: " + calculateGrade(userScore));
userScore = 40;
console.log("Score: " + userScore + "/ Grade: " + calculate
