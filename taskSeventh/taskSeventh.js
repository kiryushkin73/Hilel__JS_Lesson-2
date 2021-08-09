let root1;
let root2;
let a = parseFloat(prompt('Enter the first number: '));
let b = parseFloat(prompt('Enter the second number: '));
let c = parseFloat(prompt('Enter the third number: '));
let discriminant = b * b - 4 * a * c;
if (discriminant > 0) {
  root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  alert(`The roots of quadratic equation are ${root1} and ${root2}`);
} else if (discriminant == 0) {
  root1 = root2 = -b / (2 * a);
  alert(`The roots of quadratic equation are ${root1} and ${root2}`);
} else {
  let realPart = (-b / (2 * a)).toFixed(2);
  let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
  alert(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
