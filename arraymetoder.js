// Arraymetoder att lägga på minnet
/*  
.isArray() - Kontrollerar om ett värde är en array. Returnerar true eller false.
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray('Hello'));  // false

.at() - Returnerar elementet på en specifik position i arrayen (kan använda negativa index för att räkna bakifrån).
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits.at(1));  // 'Banana'
console.log(fruits.at(-1)); // 'Cherry'

.filter() - Skapar en ny array med alla element som uppfyller ett visst villkor.
let numbers = [1, 2, 3, 4];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

.forEach() - Utför en funktion för varje element i arrayen (ingen ny array skapas).
let fruits = ['Apple', 'Banana'];
fruits.forEach(fruit => console.log(fruit));
// Output: 'Apple' 'Banana'

.includes() - Kontrollerar om ett visst värde finns i arrayen. Returnerar true eller false.
let fruits = ['Apple', 'Banana'];
console.log(fruits.includes('Banana')); // true
console.log(fruits.includes('Cherry')); // false

.indexOf() - Returnerar indexet för det första förekomsten av ett värde i arrayen (eller -1 om det inte finns).
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits.indexOf('Banana')); // 1
console.log(fruits.indexOf('Orange')); // -1

.map() - Skapar en ny array genom att applicera en funktion på varje element.
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

.pop() - Tar bort och returnerar det sista elementet i arrayen.
let fruits = ['Apple', 'Banana', 'Cherry'];
let lastFruit = fruits.pop();
console.log(lastFruit); // 'Cherry'
console.log(fruits);    // ['Apple', 'Banana']

.push() - Lägger till ett eller flera element i slutet av arrayen och returnerar den nya längden.
let fruits = ['Apple', 'Banana'];
fruits.push('Cherry');
console.log(fruits); // ['Apple', 'Banana', 'Cherry']

.shift() - Tar bort och returnerar det första elementet i arrayen.
let fruits = ['Apple', 'Banana', 'Cherry'];
let firstFruit = fruits.shift();
console.log(firstFruit); // 'Apple'
console.log(fruits);     // ['Banana', 'Cherry']

.slice() - Returnerar en kopia av en del av arrayen (utan att ändra originalet).
let fruits = ['Apple', 'Banana', 'Cherry'];
let sliced = fruits.slice(1, 3);
console.log(sliced); // ['Banana', 'Cherry']

.some() - Kontrollerar om minst ett element i arrayen uppfyller ett villkor. Returnerar true eller false.
let numbers = [1, 2, 3];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

.sort() - Sorterar elementen i arrayen (kan modifiera originalet).
let numbers = [3, 1, 4, 2];
numbers.sort((a, b) => a - b); // Sorterar i stigande ordning
console.log(numbers); // [1, 2, 3, 4]

.splice() - Lägger till, tar bort eller ersätter element i arrayen.
let fruits = ['Apple', 'Banana', 'Cherry'];
fruits.splice(1, 1, 'Orange'); // Tar bort 'Banana' och lägger till 'Orange'
console.log(fruits); // ['Apple', 'Orange', 'Cherry']

.unshift() - Lägger till ett eller flera element i början av arrayen och returnerar den nya längden.
let fruits = ['Banana', 'Cherry'];
fruits.unshift('Apple');
console.log(fruits); // ['Apple', 'Banana', 'Cherry']

*/