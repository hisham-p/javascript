//  Write a JavaScript function to concatenates a given string n times (default is 1). Go to the editor
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

function repeat(input , n){
let str = input;
let nstr = str;
for(let i=1; i < n; i++)
{
  nstr = nstr + str ;
}
return nstr;
}
console.log(repeat('Ha!')); 
console.log(repeat('Ha!',2)); 
console.log(repeat('Ha!',3));function repeat(input , n){
let str = input;
let nstr = str;
for(let i=1; i < n; i++)
{
  nstr = nstr + str ;
}
return nstr;
}
console.log(repeat('Ha!')); 
console.log(repeat('Ha!',2)); 
console.log(repeat('Ha!',3));
