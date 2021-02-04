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
    const result = l1 * l2;
    return result;
}
const arearesult = area(8,4);
console.log(`The area is ${arearesult}`)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function (x, y) {
    if (x === y){
        const result1 = (x + y) * 3
        console.log(`CrAZy SuM aCtIvATeD!!!`)
        return result1
    } else {
        const result1 = (x + y)
        return result1
    }
}
const sumresult = crazySum(8,8);
console.log(sumresult)

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function (a){
    if (a > 19) {
        const result2 = (a - 19) * 3
        console.log(`TiMe FoR CRAZinnn33ss`)
        return result2
    } else {
        const result2 = a - 19
        return result2
    }
}
const diffresult = crazyDiff(119)
console.log(diffresult)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const walls = function (n){
    if (20 <= n && n <= 100 || n === 400) {
        const result3 = true
        return result3 
    } else {
        const result3 = false
        return result3
    }
}
const thewall = walls(200)
console.log(thewall)

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (string){


}

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

// const check3and7 = function(PosNumber) {
//     if (PosNumber > 0) {
    
//     } else {
//         console.log(`Number is not positive amigo`)
//     }
// }
// const check = check3and7 (9)
// console.log(check)

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

const myString = "";
const words = myString.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

words.join(" ");

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(m) {

}

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/