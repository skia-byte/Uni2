let person = {
    name: "Kiara",
    age: 17,
    city: "SMP",
    hobbies: ["reading", "gaming", "coding"]
};

console.log(person);
// ACCEDER CON NOTACION DE PUNTO
console.log(person.name);
// ACCEDER CON NOTACION DE CORCHETES
console.log(person["age"]);
// ACCEDER CON NOTACION DE PUNTO
console.log(person.city);
// ACCEDER CON NOTACION DE PUNTO
console.log(person.hobbies[0]);

//ACTUALIZAR PROPIEDAD

person.age = 18;
console.log(person.age);

//AGREGANDO UNA NUEVA PROPIEDAD
person.cellphone = "999-456-7890";
console.log(person.cellphone);
console.log(person);



let heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

  console.log(heroes.members[1].powers[1]);
  console.log(heroes.members[2].name);
  console.log(heroes.members[2].powers[2]);