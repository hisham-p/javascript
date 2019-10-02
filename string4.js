//  Write a JavaScript function to extract a specified number of characters from a string. Go to the editor
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

function truncate_string(input , n)
{
  let arr=[];
  for(let i=0 ;i < input.length ; i++)
  {
   if(i < n)
   {
     arr.push(input[i]);
   }
  }
  return arr.join('');
}
console.log(truncate_string("Robin Singh",4));
