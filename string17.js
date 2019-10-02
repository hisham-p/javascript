// Write a JavaScript function to chop a string into chunks of a given length. Go to the editor
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

function string_chop(input, n) {
  let str = input;
  let string= [];
  if(n != null)
  {
  let m=0;
  // let p=n;
  for(let i=0; i < n ; i++){
  string.push(str.slice(0,p));
  m = n;
    // m = n;
  // n=n+p;
  }
  }else{
  string.push(str);
  }
  return string;
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 3));
