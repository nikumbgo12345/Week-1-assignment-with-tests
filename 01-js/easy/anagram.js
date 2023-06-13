/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

//Logic assuming all characters are string literals
function isAnagram(str1, str2) {
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    if (str1.length != str2.length)
        return false;
    test1 = charArray(str1);
    test2 = charArray(str2);

    arrayCompare = test1.every(function (element,index) {
        return element === test2[index];
    })

    return arrayCompare
}

function charArray(string1) {
    var test = new Array(26).fill(0);
    string1.split("").forEach(chr => {
        test[chr.charCodeAt(0) - 65] = test[chr.charCodeAt(0) - 65] + 1
    });

    return test;

}


//console.log(isAnagram("test!233", "test@#$#"))
module.exports = isAnagram;
