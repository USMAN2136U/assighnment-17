// ARRAYS
// Q1
var futureStudentNames = [];
// Q2
var futureStudentNames = new Array();
// Q3
var stringsArray = ["apple", "banana", "orange", "grape"];
// Q4
var numbersArray = [1, 2, 3, 4, 5];
// Q5
var booleanArray = [true, false, true, false];
// Q6
var mixedArray = ["apple", 3, true, "banana", false];
// Q7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");
// Q8
var studentNames = ["Alice", "Bob", "Charlie"];
var scores = [420, 380, 450];
var totalMarks = 500;

document.write("<h2>Student Scores and Percentages:</h2>");
document.write("<table>");
document.write("<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>");
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    document.write("<tr><td>" + studentNames[i] + "</td><td>" + scores[i] + "</td><td>" + percentage.toFixed(2) + "%</td></tr>");
}
document.write("</table>");
// Q9

// Q10
var studentScores = [85, 72, 93, 65, 78];
studentScores.sort(function(a, b) {
    return a - b;
});
console.log("Sorted student scores in ascending order:", studentScores);
// Q11
var cities = ["Karachi", "Lahore", "Islamabad", "Qutta", "Peshawar"];
var selectedCities = [];
selectedCities = cities.slice(3, 4);
console.log("Selected cities:", selectedCities);
// Q12
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
console.log(singleString);
// Q13
var fifoArray = [];

fifoArray.push("value1");
fifoArray.push("value2");
fifoArray.push("value3");

console.log(fifoArray.shift()); 
console.log(fifoArray.shift());
console.log(fifoArray.shift());
// Q14

// Q15
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
var dropdownHTML = "<select>";
for (var i = 0; i < phoneManufacturers.length; i++) {
    dropdownHTML += "<option>" + phoneManufacturers[i] + "</option>";
}
dropdownHTML += "</select>";
document.write(dropdownHTML);


// ARRAYS AND LOOP
// Q1
var multiDimArray = [];
// Q2
var matrix = [
    [0, 1, 2 ,3],
    [1, 0, 1, 2, ],
    [2, 1, 0, 1 ]
];
// Q3
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
// Q4
var tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));
console.log("Multiplication Table for", tableNumber);
for (var i = 1; i <= tableLength; i++) {
    console.log(tableNumber + " * " + i + " = " + (tableNumber * i));
}
// Q5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Q6
document.write("<p>Counting: ");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("</p>");
document.write("<p>Reverse counting: ");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("</p>");
document.write("<p>Even: ");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("</p>");
document.write("<p>Odd: ");
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("</p>");
document.write("<p>Series: ");
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}
document.write("</p>");
// Q7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter the item you want to search:");

var found = false;
for (var i = 0; i < a.length; i++) {
    if (a[i] === userInput) {
        found = true;
        break;
    }
}

if (found) {
    alert("Yes, '" + userInput + "' is found in the list.");
} else {
    alert("Sorry, '" + userInput + "' is not found in the list.");
}
// Q8
var a = [24, 53, 78, 91, 12];
var largestNumber = A[0];

for (var i = 1; i <a.length; i++) {
    if (a[i] > largestNumber) {
        largestNumber = a[i];
    }
}

console.log("The largest number in the array is:", largestNumber);
// Q9
var a = [24, 53, 78, 91, 12];
var smallestNumber = a[0];
for (var i = 1; i < a.length; i++) {
    if (a[i] < smallestNumber) {
        smallestNumber = a[i];
    }
}
console.log("The smallest number in the array is:", smallestNumber);
// 10
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
// Chapter 14 (If statements nested)
// Q1
if (password !== '') {
    if (password.length <= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }
}
// Q2
if (a === 1) { 
    if (c === "Max") { 
        alert("OK"); 
    } 
}
// Q3
if (a === 1 && c === "Max") {
    alert("OK");
}
// Q4
var num1 = 10;
var num2 = 10;
if (num1 === num2) {
    if (num1 <= num2) {
        alert("Test passed!");
    }
}
// Chapter 15 (Array I)
// Q1
var emptyArray = [];
// Q2
var myArray = ["Hello"];
// Q3
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);
// Q4
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var totalLength = alphabet.length;
console.log(totalLength);
// Q5
var myArray = ["firstElement"];
myArray[1] = "secondElement";
alert(myArray[1]);
// Chapter 16 (Array II)
// Q1
var myArray = ["Hello"];
myArray.push("World");
alert(myArray[myArray.length - 1]);
// Q2
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop("K");
console.log(Alphabet);
// Q3
var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(42); 
console.log(Alphabet); 
// Chapter 16 (Array III)
// Q1
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes);
// Q2
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);
console.log(sizes);
// Q3
var myArray = ["firstElement"];
myArray.unshift("newFirstElement");
alert(myArray[0]);
// Q4
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L"); 
console.log(sizes);
// Q5
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);
console.log(regSizes);
// Q6
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(pets.indexOf("dog") + 1, 0, "parrot", "rabbit");
pets.splice(pets.indexOf("cat"), 3);
console.log(pets);
// Q7
var pets = ["dog", "cat", "ox", "duck", "frog"];
var catIndex = pets.indexOf("cat");
var oxIndex = pets.indexOf("ox");
pets.splice(catIndex, 1);
pets.splice(oxIndex, 1);
console.log(pets); 

// Q8
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
pets = pets.slice(3, 5);
console.log(pets); 
// Chapter 17 - 20 (for Loops)
// Q1
for (var i = 0; i < 10; i++) {
}
// Q2
for (var i = 0; i <= 12; i++) {
}
// Q3
for (var i = 0; i <= 12; i++) {
}
// Q4
for (var counterName = 0; counterName < 100; counterName++) {
}
// Q5
// Q6
for (var i = 3; i > 0; i--) {
}
// Q7
var flag = true;
// Q8
for (var i = 0; i < pets.length; i++) {
    
}
// Q9
for (var i = 1; i <= 10; i++) {
    if (i === 2) {
        alert("Counter is: " + (i - 1));
        break; 
    }
}

// Q10
var firstName = prompt("Enter first name");
var userNames = ["John", "Jane", "Alice", "Bob"];
for (var i = 0; i < userNames.length; i++) {
    if (firstName === userNames[i]) {
        alert("Enter");
        break; 
    } else {
        alert("Please write correct user name");
        break; 
    }
}

// Q11
var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}

if (!matchFound) {
    alert("Match not found");
}

// Q12
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}




alert("================= THE END =================");
