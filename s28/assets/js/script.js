function numbers() {
   console.log(1);
   console.log(2);
   console.log(3);
   console.log(4);
   console.log(5);
   console.log(6);
   console.log(7);
   console.log(8);
   console.log(9);
   console.log(10);
}
numbers();
numbers();

console.log("-------");

function addTwoNumbers (a , b){
    let result = a + b;
    console.log(result);
}

addTwoNumbers(0.5, 10);
addTwoNumbers(20, 30);

console.log("-------");

function addTwoNumber (a , b){
    console.log(`Primer parámetro: ${a}`);
    console.log(`Segundo parámetro: ${b}`); 
    let result = a + b;
    console.log(`El resultado es: ${result}`);
}

addTwoNumber(5, 10);
addTwoNumber(22, 30);

//GREET= SALUDAR

function greet (targetName) {
    let hi = `Hola, ${targetName}!`;
    return hi;
}
let name = "Kiara";
let greetMessage = greet(name);
console.log(greetMessage);