function palindromeNumbers(num) {
  const reversedNum = parseInt(num.toString().split("").reverse().join(""));
  return reversedNum === num ? "Palindrome" : "Not Palindrome";
}

palindromeNumbers(329); //Not Palindrome
palindromeNumbers(12321); //Palindrome
