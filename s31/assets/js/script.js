// let num1 = parseInt(prompt("INGRESA UN NÚMERO"));
// let num2 = parseInt(prompt("INGRESA OTRO NÚMERO"));
// let suma = num1 + num2;
// console.log(`${num1} + ${num2} = ${num1 + num2}`);

let number = parseInt(prompt("NÚMERO"));
console.log(`El número que elegiste es: ${number}`);

if (number % 2 === 0) {
  console.log(`${number} es par.`);
} else {
  console.log(`${number} es impar.`);
}
