/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function (l1,l2) {
    return l1 * l2;
}
console.log(`The area is ${area(8,4)}`)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function (x, y) {
    if (x === y){
        console.log(`CrAZy SuM aCtIvATeD!!!`)
        return (x + y) * 3
    } else {
        return (x + y)
    }
}
console.log(crazySum(8,8));

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function (a){
    if (a > 19) {
        console.log(`TiMe FoR CRAZinnn33ss`)
        return Math.abs(a - 19) * 3
    } else {
        return Math.abs(a - 19)
    }
}
console.log(crazyDiff(119))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const walls = function (n){
    if (20 < n && n <= 100 || n === 400) {
        return true
    } else {
        return false
    }
}
console.log(walls(200))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function(c){
    if (c%3===0){
        return `${c} is a multiple of 3`
    }   else if (c%7===0){
        return `${c} is a multiple of 7`
    }   else {
        return `${c} is not a multiple of neither`
    }
}
console.log(check3and7(2))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

function reverseString(str) {
    const splitStr = str.split("")
    const reverseStr = splitStr.reverse();
    const joinStr = reverseStr.join("");
    return joinStr;
}
const String = reverseString("hello");
console.log(String)

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const mySentence = "strive school is an online coding course";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

console.log(words.join(" "));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

function cutString(str) {
    return str.split("").slice(1, str.length-1).join("");
}
const finalString = cutString (`This is the String`)
console.log(finalString)

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function () {
    let x = Math.floor((Math.random() * 10) + 1);
    return x;
}
console.log(giveMeRandom())

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/