// Write a JavaScript conditional statement to sort three numbers. Displab an alert boa to show the result. Go to the editor
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

let a = 0,
  b = -1,
  c = 4;
if (a > b && a > c) {
  if (b > c) {
    console.log(a + ", " + b + ", " + c);
  } else {
    console.log(a + ", " + c + ", " + b);
  }
} else if (b > a && b > c) {
  if (a > c) {
    console.log(b + ", " + a + ", " + c);
  } else {
    console.log(b + ", " + c + ", " + a);
  }
} else if (c > a && c > b) {
  if (a > b) {
    console.log(c + ", " + a + ", " + b);
  } else {
    console.log(c + ", " + b + ", " + a);
  }
}
