/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  console.log(str);
let abc= str.toLowerCase();
  console.log(abc);
abc= abc.replace(/[^a-zA-Z]/g, '');

console.log(abc);

for(let i=0,j=abc.length-1;i<=j;i++,j--)
{

  if(abc[i] != abc[j])
  {
    return false;
  }
}

  return true;
}
//console.log(isPalindrome("abcba"));
module.exports = isPalindrome;
