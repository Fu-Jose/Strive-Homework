/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
let a = 5
let b = 5
let c = 0
if (a===b){
    c = (a + b)*3;
    console.log(c)
} else {
    c = a + b;
    console.log(c)
}
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
let d = 40
let e = 10
if (d === 50 || e === 50 || d+e === 50) {
    console.log(true)
} else {
    console.log(false)
}
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
function remove(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }

console.log(remove("Strive",0));
/*

4)
 Create a function to find the largest of three given integers.
*/
function biggest(x, y, z) {
  max = 0;
  if (x > y){
    max = x;
  } else{
    max = y;
  }
  if (z > max) {
    max = z;
  }
  return max;
}
console.log(biggest(534,124,988))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function interval(x, y){
    if (x >= 40 && x <= 60){
        console.log(`x is between 40 and 60`) 
    }
    if (x >= 70 && x <= 100){
        console.log(`x is between 70 and 100`) 
    }
    if (y >= 40 && y <= 60){
        console.log(`y is between 40 and 60`) 
    }
    if (y >= 70 && y <= 100){
        console.log(`y is between 70 and 100`) 
    }
}
console.log(interval(40, 100))
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
function copy(str,num){
    result = str.repeat(num)
    return result
}
console.log(copy("STRING",5))
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const array1 = [2,5,7,5]
function sumarray(){
    let result1 = 0
    for (var i = 0; i < array1.length;i++) {
        result1 = result1 + array1[i]
    }   return result1
}   
console.log(sumarray())
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const array2 = [1,2,3]
function test(){
    for (var i = 0; i < array2.length; i++) {
        if (array2[i]===1 || array2[i]=== 3) {
            console.log(`There is a ${array2[i]} in the array`)
        }   
    }
}
console.log(test())
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3*/
const array3 = [1,2,4];
function test2(){
    for (var i = 0; i < array3.length; i++) {
        if (array3[i]!==1 && array3[i]!== 3) {
            console.log("There are no 1 or 3 in the array")
        }   else {
            console.log(`There are either a 1 or 3 in the array`)
        }
    }
}
console.log(test2())
// 11)

// Create a function to find the longest string from a given array of strings.
const array4 = ["Short","Medium String","Very long String"];
let maxString=0;
let longest;    
    for (var i = 0; i < array4.length; i++){
        if (array4[i].length > maxString){
            maxString = array4[i].length;
            longest = array4[i];
        }
    }   
console.log(longest) 
// 12)

// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.
function angle(ang){
    if (ang >= 0 && ang < 90){
        // console.log(`ang is acute`)
        return "ang is acute"
    }
    if (ang===90){
        return `ang is right`
    }
    if (ang >= 91 && ang < 180){
        return `ang is obtuse`
    }
    if (ang===180){
        return `ang is straight`
    } 
}
console.log(angle(180))
// 13)

// Create a function to find the index of the greatest element of a given array of integers
array5 = [4,32,6,70,554,1]
let maximo=0;
let maxIndex;
function maxNumber(){
    for (var i = 0; i <array5.length; i++){
        if (array5[i]>maximo){
            maximo = array5[i];
            maxIndex = i;
        }   
    }return maxIndex
}   

console.log(maxNumber())
// 14)

// Create a function to get the largest even number from an array of integers.

// 16)

// Create a function to check from two given integers, whether one is positive and another one is negative.

// 17)

// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

// 18)

// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// 19)

// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

// 20)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

// */