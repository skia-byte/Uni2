
let name = "Anie";
if (name.length < 5) {
    console.log("Que nombre tan corto tienes");

}

name = "Ana";

if (name.length > 7) {
    console.log("Que nombre tan largo tienes");
}
else {
    console.log("Que nombre tan corto tienes");
}

let age = 19;
if (age >= 18) {
    console.log("Preparate para votar");
}
else {
    console.log("Eres menor de edad");
}



let number = 10;
let number2 = 5;

if (number > number2) {
    console.log(`${number} es mayor que ${number2}`);
}
else {
    console.log(`${number} es menor que ${number2}`);
}

console.log(`Anidación`);
edad = 21;
let estaEnUSA = true;

if (edad >= 21) {
    if (estaEnUSA) {
        console.log("Puedes votar");
    }
    console.log("Eres mayor de edad");
}

else {
    console.log("Eres menor de edad");
}

let weekDay = 5;

switch (weekDay) {
  
    case 1:
        console.log("Hoy es domingo");
        break;
    case 2:
        console.log("Hoy es lunes");
        break;
    case 3:
        console.log("Hoy es martes");
        break;
    case 4:
        console.log("Hoy es miércoles");
        break;
    case 5:
        console.log("Hoy es jueves");
        break;
    case 6:
        console.log("Hoy es viernes");
        break;
    case 7:
        console.log("Hoy es sábado");
        break;

    default:
        console.log("Día no encontrado");
        break;
}