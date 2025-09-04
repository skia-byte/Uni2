/*
Seleccionamos elemtentos del DOM gracias al objeto "document" y algunos de sus metodos como "getElementById" o "querySelector".
*/
let mainTitle = document.getElementById("main-title");
console.log(mainTitle);
console.log(mainTitle.innerText);
mainTitle.innerText = "Titulo cambiado dinamicamente";
console.log(mainTitle.innerText);

let mainText = document.getElementsByClassName("main-text");
console.log(mainText);
console.log(mainText[0].innerText);
mainText[0].innerText = "Holaa primer parrafo cambiado dinamicamente";
console.log(mainText[0].innerText);

let subTitle = document.getElementsByTagName("h2");
console.log(subTitle);
console.log(subTitle[0].innerText);
console.log(subTitle[1].innerText);
console.log(subTitle[2].innerText);

let queryMainTitle = document.querySelector("#main-title");
console.log(queryMainTitle);

let queryMainText = document.querySelectorAll(".main-text");
console.log(queryMainText);

document.getElementById("main-button").addEventListener("click", function () {
  console.log("Botón presionado");
});
