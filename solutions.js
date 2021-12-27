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

