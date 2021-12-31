/////////////////////////////////////////// Verbal Questions ///////////////////////////////////////////////
//1A. parameter is the variable given in the paraenthesis while creating the function.  Arguments is the variable you write in the parenthesis to replace the parameter when you call the funciton.
//2A. return gives a value for the computer to store, whereas console.log simply logs whatever you place inside it for testing purposes.








/////////////////////////////////////////////Palindrome///////////////////////////////////////////////////
const checkPalindrome = (str) =>{
    return str.toUpperCase() == str.split('').reverse().join('').toUpperCase()
}
console.log(checkPalindrome('Radar'))

///////////Sum Array////////////
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum
}
console.log(sumArray([1,2,3,4,5,6]))









/////////////////////////////////////////////////Prime Numbers////////////////////////////////////////////
//////////Step One//////////
//if num is divisable by any number less than or equal to its square root, then false
const checkPrime = (num) => {
    let result1 = true
    let result2 = true
    let answer
    for (let i = Math.floor(Math.sqrt(num)) + 1; i > 1; i--){
        if(num % i === 0){
            result1 = false
        }
        answer = result1 === result2;
    }
    return answer
}

console.log(checkPrime(9))
 

//////////Step Two////////
const printPrimes = (num) => {
    for (let i = 0; i <= num; i++){
        if(checkPrime(i) === true){
            console.log(i)
        }
    }
}

printPrimes(78)








////////////////////////////////////////////Rock Paper Scissors///////////////////////////////////////////
const choice = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
const randomMove = () => {
    let randomizer = Math.floor(Math.random() * choice.length);
    return choice[randomizer];
}

let computerMove = randomMove();
let usersMove 

const arguments = process.argv.slice(2);
//https://www.youtube.com/watch?v=X39LSNNZW14
//process.argv allows a comands to be typed on terminal to be passed as arguments.
//proccess.argv is an array of commands and there are two commands already built into it (reson for .slice)
const playerMove = () =>{
    let input = arguments[0].toLowerCase()
    let rock = 'rock'
    let paper = 'paper'
    let scissors = 'scissors'
    let lizard = 'lizard'
    let spock = 'spock'
    if(input == rock){
        usersMove = choice[0];
    } else if(input == paper){
        usersMove = choice[1];
    } else if(input == scissors){
        usersMove = choice[2];
    } else if(input == lizard){
        usersMove = choice[3];
    } else if(input == spock){
        usersMove = choice[4];
    }
}

playerMove()


const rockPaperScissors = (pl1, pl2) => {
    console.log(`Computer chose ${computerMove}`);
    console.log(`User chose ${usersMove}`)
    if(computerMove === choice[0] && usersMove === choice[1]){
        console.log(`User wins! ${choice[1]} covers ${choice[0]}`);
    } else if(computerMove === choice[1] && usersMove === choice[0]){
        console.log(`Computer wins! ${choice[1]} covers ${choice[0]}`);
    } else if(computerMove === choice[0] && usersMove === choice[2]){
        console.log(`Computer wins! ${choice[0]} crushes ${choice[2]}`)
    } else if(computerMove === choice[2] && usersMove === choice [0]){
        console.log(`User wins! ${choice[0]} crushes ${choice[2]}`);
    } else if(computerMove === choice[0] && usersMove === choice[3]){
        console.log(`Computer wins! ${choice[0]} crushes ${choice[3]}`);
    } else if(computerMove === choice[3] && usersMove === choice[0]){
        console.log(`User wins! ${choice[0]} crushes ${choice[3]}`);
    } else if(computerMove === choice[0] && usersMove === choice[4]){
        console.log(`User wins! ${choice[4]} vaporizes ${choice[0]}`);
    } else if(computerMove === choice[4] && usersMove === choice[0]){
        console.log(`Computer wins! ${choice[4]} vaporizes ${choice[0]}`);
    } else if(computerMove === choice[1] && usersMove === choice[2]){
        console.log(`User wins! ${choice[2]} cuts ${choice[1]}`);
    } else if(computerMove === choice[2] && usersMove === choice[1]){
        console.log(`Computer wins! ${choice[2]} cuts ${choice[1]}`);
    } else if(computerMove === choice[1] && usersMove === choice[3]){
        console.log(`User wins! ${choice[3]} eats ${choice[1]}`);
    } else if(computerMove === choice[3] && usersMove === choice[1]){
        console.log(`Computer wins! ${choice[3]} eats ${choice[1]}`);
    } else if(computerMove === choice[1] && usersMove === choice[4]){
        console.log(`Computer wins! ${choice[1]} disproves ${choice[4]}`);
    } else if(computerMove === choice[4] && usersMove === choice[1]){
        console.log(`User wins! ${choice[1]} disproves ${choice[4]}`);
    } else if(computerMove === choice[2] && usersMove === choice[3]){
        console.log(`Computer wins! ${choice[2]} decapitates ${choice[3]}`);
    } else if(computerMove === choice[3] && usersMove === choice[2]){
        console.log(`User wins! ${choice[2]} decapitates ${choice[3]}`);
    } else if(computerMove === choice[2] && usersMove === choice[4]){
        console.log(`User wins! ${choice[4]} smashes ${choice[2]}`);
    } else if(computerMove === choice[4] && usersMove === choice[2]){
        console.log(`Computer wins! ${choice[4]} smashes ${choice[2]}`);
    } else if(computerMove === choice[3] && usersMove === choice[4]){
        console.log(`Computer wins! ${choice[3]} poisons ${choice[4]}`);
    } else if(computerMove === choice[4] && usersMove === choice[3]){
        console.log(`User wins! ${choice[3]} poisons ${choice[4]}`);
    } else {
        console.log(`It's a tie. Try again.`);
    }
}

rockPaperScissors(computerMove, usersMove)










////////////////////////////////////////////////Digit Sum///////////////////////////////////////////////////
const sumDigits = (num) => {
    const numArr = num.toString().split(""); //separates integer into different strings
    const result = numArr.reduce((firstDigit, secondDigit) => parseInt(firstDigit) + parseInt(secondDigit)); 
    //.reduce puts the two strings back together
    //parseInt turns the strings into integers so they are added together
    return result
}
console.log(sumDigits(42))
//https://levelup.gitconnected.com/javascript-algorithm-sum-of-all-digits-in-a-number-f1882e323ab1









//////////////////////////////////////////////Pythagoras///////////////////////////////////////////////////
const calculateSide = (sideA, sideB) => {
    let result = Math.hypot(sideA, sideB) //returns the square root of the sum of squares of its arguments
    return result
}
console.log(calculateSide(8, 6))

/*
//Another option
const calculateSide = (sideA, sideB) => {
    let sum = Math.pow(sideA, 2) + Math.pow(sideB, 2); //adds exponent to the variable
    let sideC = Math.sqrt(sum);
    return sideC
}
console.log(calculateSide(8, 6))
*/








//////////////////////////////////////////////////Triangles/////////////////////////////////////////////
console.log('right isosceles triangle')
const argument = 7
for (let i =1; i <= argument; i++){
    let str = '#';
    console.log(str.repeat(i))
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

console.log('upside down right isosceles triangle')
for (let i = argument; i > 0; i--){
    let str = '#';
    console.log(str.repeat(i))
}


/*
//classmate showed me how to add a break line
console.log('adding a break line')
const length = 7
let triangle = ''
for (let i = 1; i <= length; i++){
    triangle += '#'.repeat(i) + '\n'
}

for (let i = length; i > 0; i--){
    triangle += '#'.repeat(i) + '\n'
}
console.log(triangle)
*/



//I was looking for a way to solve the isosceles triangle and found a questions that asked to reverse it and wanted to try it.
//https://github.com/Murray918/Arrays_Loops_Objects-Homework#readme
//it's the second to last question
console.log('reverse right isosceles triangle')
for (let i =1; i <= argument; i++){
    let str = '#';
    let triangle = str.repeat(i)
    console.log(triangle.padStart(argument)) //adds current string until it reaches the deisred length. 
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

console.log('reverse upside down right isosceles triangle')
for (let i = argument; i > 0; i--){
    let str = '#';
    let triangle = str.repeat(i)
    console.log(triangle.padStart(argument))
}








//////////////////////////////////////////"Second" Numbers//////////////////////////////////////////////
const secondNumbers = (arr) => {
    let newArray = arr.sort((a,b) => {
        return a - b;
    })
    let secondHighest = newArray[newArray.length - 2];
    let secondLowest = newArray[1];
    console.log(`second highest: ${secondHighest} \nsecond lowest: ${secondLowest}`)
}

secondNumbers([3,5,1,9,12,4,2,6])










//////////////////////////////////////////Unique String//////////////////////////////////////////////
//I'm not even sure what I'm doing wrong in this one. 

const uniqueString = (str) => {
    let array = str.split('');
    let newArr = [];
    for (let i = 0; i < array.length; i++){
        if(array.includes(array[i]) !== newArr.includes(array[i])){
            newArr.push(array[i]);
        } 
    }
    console.log(newArr.join(''))
}
uniqueString('icecream')











//////////////////////////////////////////Insert Dash/////////////////////////////////////////////
const insertDash = (num) => {
    let str = num.toString().split('');
    let numArr = []
    for (let i = 0; i < str.length; i++){
        numArr.push(parseInt(str[i]))
        if(numArr[i-1] % 2 !== 0 && i > 0){
            if(numArr[i] % 2 !== 0){
                numArr.splice(i, 1,  -Math.abs(numArr[i]));
            }
        }
    }
    return numArr.join('')
}
console.log(insertDash(1392457))
//https://stackoverflow.com/questions/5574144/positive-number-to-negative-number-in-javascript
