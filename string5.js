// Write a JavaScript function to convert a string in abbreviated form. Go to the editor
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

function abbrev_name(input) {
  let arr = [];
  for (let i = 0; i < input.length; i++){
   arr.push(input[i]);
  }
 for (let i = 0; i < arr.length; i++) {
    
     if(arr[i] === ' ')
   {
        arr.splice(i+2)
    }
   
  }
  return arr.join('') + '.';
}
console.log(abbrev_name("Robin Singh"));
