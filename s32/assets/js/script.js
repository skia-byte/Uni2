class Person {
  #cellphone;
  #age;

  constructor(firstName, age, height, weight, hobbies, cellphone) {
    this.firstName = firstName;
    this.#age = age;
    this.height = height;
    this.weight = weight;
    this.hobbies = hobbies;
    this.#cellphone = cellphone;
  }

  decirHola() {
    console.log(`Hola.`);
  }

  presentar() {
    console.log(
      `Soy ${this.firstName}, tengo ${this.#age} años, mido ${
        this.height
      }m y peso ${this.weight}kg. Mis hobbies son ${this.hobbies.join(", ")}.`
    );
  }

  mostrarCellphone() {
    return this.#cellphone;
  }

  mostrarAge() {
    return this.#age;
  }
}

let person1 = new Person(
  "Kiara",
  17,
  1.6,
  50,
  ["bailar", "cantar", "dibujar"],
  "959-555-755"
);
console.log(person1);
person1.decirHola();
person1.presentar();
console.log(person1.mostrarCellphone());
console.log(person1.mostrarAge());

class Chef extends Person {
  constructor(
    firstName,
    age,
    height,
    weight,
    hobbies,
    cellphone,
    restaurant,
    favoriteFood
  ) {
    super(firstName, age, height, weight, hobbies, cellphone);
    this.restaurant = restaurant;
    this.favoriteFood = favoriteFood;
  }

  presentar() {
    super.presentar();
    console.log(`Mi restaurante es ${this.restaurant}.`);
  }
}

let chef1 = new Chef(
  "Alfredo",
  35,
  1.75,
  70,
  "cocinar",
  "959-555-755",
  "La Dolce Vita",
  "pasta"
);
console.log(chef1);
