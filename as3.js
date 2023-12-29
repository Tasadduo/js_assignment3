
//Declare an empty array using JS literal notation to store student names in future.
var empArray= [];

// Declare an empty array using JS object notation to store student names in future.
var studentNames = {};

//Declare and initialize a strings array.

var intArray=["apple",'banana','mango'];

//Declare and initialize a numbers array.

var numArray=[1,2,300];

//Declare and initialize a boolean array.

var booArray=[true,false,false,true];

//Declare and initialize a mixed array.

var mixArray=[1,"apple",true];

/*Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like:*/

/* var qualifications=["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PHD"];
var num=1;
for(var i=0;i<qualifications.length;i++){
    console.log(`${num}:${qualifications[i]}`);
    num++;
}*/

/* Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like: */

/* var stu=["Ali","Hassan","Hussain"];
var marks=[320,230,480];
var Total_Marks=500;
for(var i=0;i<stu.length;i++){
    var per=(marks[i]/Total_Marks)*100;
    console.log(`Score of ${stu[i]} is ${marks[i]} , Percentage is ${per} %`);
} */

/* Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser. */

//  var color=['blue','black','yellow','red'];
// console.log("Orignal Colors",color);
// var askUser=prompt("What color you want to add");
/*
color.unshift(askUser);
console.log("After Added color",color);*/

/* Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser. */

/* color.splice(4,0,askUser);
console.log("After Added color",color); */

/* Add two more color to the beginning of the array.
Display the updated array in your browser. 
 color.unshift("pink","red");
console.log("After Added color",color); */


/* Delete the first color in the array. Display the updated
array in your browser. */
// color.shift(color[0]);
// console.log("After Delete color",color);

/* Delete the last color in the array. Display the updated
array in your browser.  */

// color.pop();
//  console.log("After Delete color",color);

/* Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser. */

/* var userIndex=+prompt(" which index you wants to add a color");
var userColor=prompt("which color you waant to add")
color.splice(userIndex,0,userColor);
 console.log("After Add color",color); */

 /* Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser. */

/* var userIndex=+prompt(" which index you wants to delete a color");
var userIndexDelete=+prompt(" How many colors you want to delete");
color.splice(userIndex,userIndexDelete);
console.log("After delete color",color);     */

/* Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method. */

// var storeScore=[65,77,34,56,65,55,67,77];
// console.log("Score Of Students: ",storeScore);
// storeScore.sort();
// console.log("Order Score Of Students: ",storeScore);

/* Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array. */
 
// var cities=['karachi', 'lahore','islamabad','quetta','peshawar'];
// console.log("Cities List",cities);
// var selectedcity=cities.slice(1,4);
// console.log("Selected cities",selectedcity);

/* Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
var arr = ['this','is','my','cat'];
var result=arr.join(" ");
console.log(result); */

// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
// var fifoArray=[];
// fifoArray.push("value1");
// fifoArray.push("value2");
// fifoArray.push("value3");
// console.log(fifoArray);
// fifoArray.shift();
// fifoArray.shift();
// fifoArray.shift();
// console.log(fifoArray);

 /*Create a new array. Store values one by one in such a way

that you can access the values in reverse order. (Last In-
First Out)*/

// var LifoArray=[];
// LifoArray.push("value 1");
// LifoArray.push("value 2 ");
// LifoArray.push("value 3");
//  console.log(LifoArray);
// LifoArray.pop();
// LifoArray.pop();
// LifoArray.pop();
// console.log(LifoArray);


