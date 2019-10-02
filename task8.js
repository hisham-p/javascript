// .Write a JavaScript program which accept a string as input and swap the
// case ofeach character.For example
// if you input 'The Quick Brown Fox'
// the output should be 'tHE qUICK bROWN fOX'.

let word = 'The Quick Brown Fox';
let arr = [];
for(let i=0 ; i < word.length ; i++)
{
  let temp = word[i];
  if(temp === word[i].toLowerCase())
  {
    let push1 =temp.toUpperCase()
    arr.push(push1);
}else if (temp === word[i].toUpperCase())
{
  let push1 =temp.toLowerCase();
    arr.push(push1);
}
}
console.log(arr.join(''));
