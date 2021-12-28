//// Verbal Questions ///////
//1A. parameter is the variable given in the paraenthesis while creating the function.  Arguments is the variable you write in the parenthesis to replace the parameter when you call the funciton.
//2A. return gives a value for the computer to store, whereas console.log simply logs whatever you place inside it for testing purposes.

///////Palindrome/////////
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


///////////Prime Numbers/////////
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


////////////////Rock Paper Scissors//////////////
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
    let rock = 'rock'
    let paper = 'paper'
    let scissors = 'scissors'
    let lizard = 'lizard'
    let spock = 'spock'
    if(arguments == rock){
        usersMove = choice[0];
    } else if(arguments == paper){
        usersMove = choice[1];
    } else if(arguments == scissors){
        usersMove = choice[2];
    } else if(arguments == lizard){
        usersMove = choice[3];
    } else if(arguments == spock){
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
