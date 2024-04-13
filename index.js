function isPalindrome(word) {
  // Write your algorithm here
  const cleanWord = word.toLowerCase();

  // Initialize pointers to track characters from both ends of the word
  let left = 0;
  let right = cleanWord.length - 1;

  // Loop until the pointers meet in the middle
  while (left < right) {
    // If characters at the pointers are not equal, return false
    if (cleanWord[left] !== cleanWord[right]) {
      return false;
    }
    // Move the pointers towards the middle
    left++;
    right--;
  }

  // If the loop completes without returning false, the word is a palindrome
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
