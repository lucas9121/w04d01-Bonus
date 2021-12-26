//// Verbal Questions ///////
//1A. parameter is the variable given in the paraenthesis while creating the function.  Arguments is the variable you write in the parenthesis to replace the parameter when you call the funciton.
//2A. return gives a value for the computer to store, whereas console.log simply logs whatever you place inside it for testing purposes.

///////Palindrome/////////
const checkPalindrome = (str) =>{
    return str.toUpperCase() == str.split('').reverse().join('').toUpperCase()
}
console.log(checkPalindrome('Radar'))

