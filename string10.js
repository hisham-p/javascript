// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"

function swapcase(input) {
  let str = input.split('');
  for (let i = 0; i < str.length; i++) {
    let temp = str[i];
    if (temp === str[i].toLowerCase()) {
      str[i] = temp.toUpperCase()
    } else if (temp === str[i].toUpperCase()) {
      str[i] = temp.toLowerCase();
    }
  }
  return str.join('');
}
console.log(swapcase('AaBbc'));
