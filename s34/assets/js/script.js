let drink = ["water", "juice", "soda"];
console.log(drink);
drink.push("tea");
console.log(drink);
drink.pop();
console.log(drink);
drink.unshift("milk");
console.log(drink);
drink.shift();
console.log(drink);
console.log(drink.includes("juice"));
console.log(drink.includes("coffee"));
console.log(drink.indexOf("soda"));
console.log(drink.indexOf("milkshake"));
console.log(drink.join(", "));
console.log(drink.join(" - "));
let newDrink = drink.slice(2);
console.log(newDrink);
console.log(drink.slice(1, 2));

drink = ["water", "juice", "soda", "tea", "milk", "coffee"];
drink.splice(2, 1);
console.log(drink);
drink.splice(1, 2, "lemonade", "smoothie");

let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbs);
let numbsMap = numbs.map((x) => x * 2);
console.log(numbsMap);

let numsToString = numbs.map((x) => `Número ${x}`);
console.log(numsToString);
let filterNumbs = numbs.filter((x) => x % 2 === 0);
console.log(filterNumbs);
let sumNumbs = numbs.reduce((a, b) => a + b, 0);

console.log(sumNumbs);
let productAllElement = numbs.reduce((a, b) => a * b, 1);
console.log(productAllElement);
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.7));
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
