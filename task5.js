// 5. Write a JavaScript program which accept a number as input and insert dashes(-) between each two even numbers.For example
// if you accept 025468 the output should be 0 - 254 - 6 - 8.

var num=25468;
var str = num.toString();
let arr = [];
for(let i=0; i<str.length; i++)
  {
      if(str[i] === 0){
            arr.push( '-' , str[i+1]);
    }
    else if((str[i] % 2 === 0) && (str[i-1] % 2 === 0)) 
     {
      arr.push( '-' , str[i]);
     }
    
    else
     {
      arr.push(str[i]);
     }
  }
console.log(arr.join(''));
