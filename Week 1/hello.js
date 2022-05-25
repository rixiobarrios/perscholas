//WEEK ONE
//-------------------------

//let’s say hello to the world.
// Open VSCode text
// Write Javascript's print statement: console.log(‘text’)
// Save the file as hello.js
// Open bash terminal
// Run hello.js file using the command
// node hello.js
//
// console.log('hello world'); //hello world
//-------------------------

//Find the sum
//
// declare two variables
// assign them numerical values
// declare a third variable and assign it the sum of above two variables
//
// var num1 = 2;
// var num2 = 4;
//
// var sum = num1 + num2;
// console.log(sum); //6
//--------------------------

// Find the sum
//
// Include a few more variables
// switch up your operators
//
// var num3 = 5;
// var num4 = 3;
//
// var sub = num3 - num4;
// console.log(sub); //2
//
// var num5 = 2;
// var num6 = 12;
//
// var mul = num5 * num6;
// console.log(mul); //24
//
// var num7 = 16;
// var num8 = 2;
//
// var div = num7 / num8;
// console.log(div); //8
//
// var num9 = 24;
// var num0 = 2;
//
// var mod = num9 % num0;
// console.log(mod); //0
//--------------------------

//Find the Average
//
// Declare and assign values to 10 different variables
// Find average of first 5 variables
// Find average of last 5 variable
// Find average of above two results
//
// var value1 = 4;
// var value2 = 10;
// var value3 = 22;
// var value4 = -30;
// var value5 = 55;
// var value6 = 68;
// var value7 = 7;
// var value8 = -22;
// var value9 = 9;
// var value0 = 100;
//
// Find the average of ( 4, 10, 22, -30, 55);
// Find the average of ( 68, 7, -22, 9, 100);
// Find the average of the above;
// Print in console
//
// const firstFive = [4, 10, 22, -30, 55];
// console.log(firstFive);
//
// let total1 = 0;
// for(let i = 0; i < firstFive.length; i++) {
//     total1 += firstFive[i]; //total1 = total1 + firstFive[i];
// }
// let avg1 = total1 / firstFive.length;
// console.log(avg1);
//
// const lastFive = [68, 7, -22, 9, 100];
// console.log(lastFive);
//
// let total2 = 0;
// lastFive.forEach(function(lastFive) {
//     total2 += lastFive //total2 = total2 + lastFive
// });
// let avg2 = total2 / lastFive.length;
// console.log(avg2)
//------------------------------------

// Declare a variable ‘num’
// Write a statement that checks if an ‘num’ is positive or negative
//
//change the value of the variable save & open it again
//
// var num = -32;
// // var num = 32;
//
// if(num > 0) {
//     console.log("num is positive")
// } else if(num < 0) {
//     console.log("num is negative")
// }
//-------------------------------------

//You are tasked with setting up the security for a web site that only grants users over the age of 18+ access to the site. 
//Write a conditional that gives users who are 18+ access and logs access denied for users who do not meet the given condition.
//
// var age = 17;
// var age = 18;
//
// if(age > 17) {
//     console.log("access granted")
// } else {
//     console.log("access denied")
// }
//-------------------------------------

// Write a nested if/else statement
// Declare a variable ‘num’
// Add an if/else statement that checks if ‘num’ is positive & greater than 100
// Add another statement that checks if ‘num’ is positive but less than 100
// Add an the final statement to check if ‘num’ is negative
//
// var num = 101;
// var num = 1;
// var num = 99;
// var num = -1;
//
// if(num > 100) {
//     console.log("num is greater than 100")
// } else if(num > 0) {
//     console.log("num is positive")
// } else if(num < 100) {
//     console.log("num is less than 100")
// } else if(num < 0) {
//     console.log("num is negative")
// }
//-------------------------------------

// What is your letter grade?
//
// Write an if/else statement for the following requirements:
//
// If student gets 90 or higher: console log A
// If students get 80 or above: console log B
// If students get 70 or above: console log C
// If students get 55 or above: console log D
// Any grade lower than 55 is F
//
// var grade = 90;
// var grade = 80;
// var grade = 70;
// var grade = 55;
// var grade = 54;
//
// if(grade >= 90) {
//     console.log("A")
// } else if(grade >= 80) {
//     console.log("B")
// } else if(grade >= 70) {
//     console.log("C")
// } else if( grade >= 55) {
//     console.log("D")
// } else if(grade < 55) {
//     console.log("F")
// }
//-------------------------------------

//This for loop iterates from 0 to 9.
//
// let i = 0 is the initiator point 
// i <= 9 is the condition for running the loop
// i++ is the incrementor 
// for(let i = 0; i <= 9; i++) {
//     console.log(i);
// }
//-------------------------------------

//Replace var/let for const, see what happens
//
// will throw an error for using const 
//to define a starting point that cannot be changed
// for(const i = 0; i < 10; i++) {
//     console.log(i);
// }
//-------------------------------------

//Write a for loop that counts down from 10 to 1
//
// let i = 10 //is the initiator point 
// i >= 10 //is the condition for running the loop
// i-- //is the decrementor 
// for(let i = 10; i >= 1; i--) {
//     console.log(i);
// }
//-------------------------------------

//Write a for loop for the given output
//
// for(let i = 1; i <= 10; i = i + 2) {
//     console.log(i);
// }
//
// for(let i = 2; i <= 10; i = i + 2) {
//     console.log(i);
// }
//  output: 1, 3, 5, 7, 9 2, 4, 6, 8, 10
//-------------------------------------

//create a loop that outputs multiples of 3 starting at 6 ending at 60.
//
// for(let i = 6; i <= 60; i = i + 3) {
//     console.log(i)
// }
//-------------------------------------

//Write a for loop for the given output
//
//outer loop
// for(let i = 0; i < 7; i++) {
//     let str = "";
// //inner loop
// for(let j = 0; j <= i; j++) {
//     // str = str + "#"; 
//     str += "#";
// }
// console.log(str);
// }
//
//using the string method .repeat()
// for(let i = 1; i <= 7; i++) {
//     console.log("#".repeat(i))
// }
// output:
// #
// ##
// ###
// ####
// #####
// ######
// #######
//--------------------------------------

//Using the remainder % operator, write a for loop that iterates between 0 and 10 and prints all even numbers.
//
// for(let i = 0; i <= 10; i++) {
//     if( i % 2 === 0) {
//         console.log(i)
//     }
// }
// output: 2, 4, 6, 8, 10
//---------------------------------------

//Write a for loop that iterates from 1 - 20. Prints “prime” for all prime numbers, “even” for all even numbers, and “odd” for all odd numbers.
//Treat 2 as an even number and 1 & 3 as odd
//
//count 1 to 20
// for(let i = 0; i <= 20; i++) {
//     console.log(i);
// }
//
//print primes
// for(let i = 0; i <= 20; i++) {
//     if(i === 1 || i === 3 || i === 5 || i === 7 || i === 11 || i === 13 || i === 17 || i === 19) {
//         console.log("prime");
//
//print "prime" for all prime numbers, treat 2 as an even and 1 & 3 as odds
// for(let i = 0; i <= 20; i++) {
//     if(i === 1 || i === 3) {
//         console.log("odd");
//     } else if(i === 2) {
//         console.log("even");   
//     } else if(i === 5 || i === 7 || i === 11 || i === 13 || i === 17 || i === 19) {
//         console.log("prime")
//     } else {
//         console.log(i);
//     }
// }
//----------------------------------------

//Write a while loop to count down to 0
//
// let i = 10;
// while(i > 0) {
//     console.log(i);
//     i--;
// }
//----------------------------------------

//Keep printing integers in multiples of 3 as long as integers are less than 35 using a while loop
//
// let i = 0;
// while( i <= 35) {
//     console.log(i);
//     i += 3; // i = i + 3;
// }
//----------------------------------------

//Keep printing integers in multiples of 5 as long as integers are less than 100
//
// let i = 0;
// while(i <= 100) {
//     console.log(i);
//     i = i + 5; // i += 5;
// }
//----------------------------------------

//Using a while loop print integers between 0 and 20. All numbers divisible by 2 should be multiplied by 3 before they are output. All other integers should not be output.
//Hint: use Modulo
//
// let i = 0;
// while(i <= 20) { //print integers between 0 to 20
//     if(i % 2 == 0) { //use Modulo
//         let result = i * 3; //all numbers divisible by two are multiplied by 3 before they are output
//         console.log(result); //output
//     }
//         i++; // incrementor
//     }
// output:
// 0 * 3 = 0
// 2 * 3 = 6
// 4 * 3 = 12
// 6 * 3 = 18
// 8 * 3 = 24
// 10 * 3 = 30
// 12 * 3 = 36
// 14 * 3 = 42
// 16 * 3 = 48
// 18 * 3 = 54
// 20 * 3 = 60
//----------------------------------------

//Using a while loop, print out all prime numbers between 0 - 20
//
// let i = 0;
// while( i <= 20) {
//     if(i === 2 || i % 2 != 0 && i != 1 && i != 9 && i != 15) {
//         console.log(i);
//     }
//     i++
// }
//
// output:  2, 3, 5, 7, 11, 13, 17, 19
//-----------------------------------------

//Nando went to the vending machine to buy himself a cookie. 
//The cookie costs $4 dollars. He paid with a $10 bill, the vending machine paid him back in quarters. 
//Write a loop that says how many quarters he got in return.
//
//simple approach
// const changeOwed = 600 // $6 in cents
// console.log(changeOwed / 25) // $0.25 // 24
//
//for loop answer
// let changeOwed = 600;
// let quaters = 0;
//
// for(let i = changeOwed; i > 0; i-= 25) {
//     quaters++;
// }
// console.log(quaters); // 24
//
//while loop answer
// let changeOwed = 600;
// let quaters = 0;
//
// while(changeOwed > 0) {
//     quaters++;
//     changeOwed -= 25;
// }
// console.log(quaters); // 24
//----------------------------------------

//Write a function that adds three numbers in ES5
//
// function add(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
// console.log(add(2, 4, 6));
//----------------------------------------

//Write a function that adds three number and divide the result by 3 in ES5
//
// function addDivide(num1, num2, num3) {
//     let result = num1 + num2 + num3;
//     // console.log(result)
//     return result / 3; // 12 divided by 3 is 4
// }
// console.log(addDivide(2, 4, 6)); // 4
//------------------------------------------

//Now try converting the code to arrow functions
//
// let add = (num1, num2, num3)=> num1 + num2 + num3;
//
// console.log(add(2, 4, 6));
//
// let addDivide = (num1, num2, num3) => {
//     return (num1 + num2 + num3) / 3;
// } 
// console.log(addDivide(2, 4, 6));
//-------------------------------------------

//Let’s take the cookie quarter challenge and extend it to all possibilities.
//What if the cookie cost $2 and I paid with a 20?
//hint: incorporate parameters
//
//simple approach
// const changeOwed = 1800 // $18 in cents
// console.log(changeOwed / 25) // $0.25 // 72
//
// function quatersLeft(changeOwed, quater) {
//     return changeOwed / 25;
// }
// console.log(quatersLeft(1800, 25)); // 72
//--------------------------------------------

//Nando went to Uniqlo and bought himself a nice plaid shirt for $27.83. 
//He paid with $100 as he had no change. The cashier paid returned his change in large denominations since they needed change for the other customers.
//Write a loop that prints out how many bills he received in return in as large denominations as possible.
//
//simple logic
let paid = 100;
let owed = 72.17;
// let cost = 27.83;
let change = 0;
// let change = paid - cost;
// console.log(change); // 72.17

// const hundred = 100;
const fifty = 50;
const twenty = 20;
const ten = 10;
const five = 5;
const two = 2;
const one = 1;
const quarter = 0.25;
const dime = 0.10;
const nickle = 0.05;
const penny = 0.01;

while(owed > 0) {
    if(owed < paid) {
        owed -= paid;
        change += paid;
        console.log(`gave a hundred", owed:${owed}`);
    }
    else if(owed >= fifty) {
        owed -= fifty;
        change += fifty;
        console.log(`got a fifty", owed:${owed}`);
    }
    else if(owed >= twenty) {
        owed -= twenty;
        change += twenty;
         console.log(`got a rwenty", owed:${owed}`);
    }
    else if(owed >= ten) {
        owed -= ten;
        change += ten;
         console.log(`got a ten", owed:${owed}`);
    }
    else if(owed >= five) {
        owed -= five;
        change += five;
         console.log(`got a five", owed:${owed}`);
    }
    else if(owed >= two) {
        owed -= two;
        change += two;
         console.log(`got a two", owed:${owed}`);
    }
    else if(owed >= one) {
        owed -= one;
        change += one;
         console.log(`got a one", owed:${owed}`);
    }
    else if(owed >= quarter) {
        owed -= quarter;
        change += quarter;
         console.log(`got a quarter", owed:${owed}`);
    }
    else if(owed >= dime) {
        owed -= dime;
        change += dime;
         console.log(`got a dime", owed:${owed}`);
    }
    else if(owed >= nickle) {
        owed -= nickle;
        change += nickle;
         console.log(`got a nickle", owed:${owed}`);
    }
    else if(owed >= penny) {
        owed -= penny;
        change += penny;
         console.log(`got a cent", owed:${owed}`);
    } else if(owed >= 0) {
        console.log('got all my money, Thanks!');
        break;
    }
}


// Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. 
//For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. 
//When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
//
//
// for(let i = 0; i <= 100; i++) {
//     if(i % 3 === 0) {
//         console.log("Fizz");
//     }
//     if(i % 5 === 0) {
//         console.log("Buzz");
//     }
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     console.log(i)
// }