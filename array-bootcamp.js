'use strict';

//THE BASICS
/* 1 */
/* Gör en array som innehåller 5 st olika frukter av datatypen string. 

SVAR:
let fruits = ['Banan', 'Äpple', 'Kiwi', 'Melon', 'Apelsin']
console.log(fruits);
*/

/* 2 */
/* Gör en array som innehåller 4 olika datatyper, ex. string, number, array. 

SVAR:
let randomObjects = ['Banan', 3, true, ['Chiwawa', 'bulldog']];
console.log(randomObjects);
*/

/* 3 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* console.log() hur många objekt arrayen ovan innehåller. 

SVAR:
let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'];
console.log(`Hela arrayen innehåler ${animals.length} objekter och den andra har ${animals[1].length} tecken`);
*/

/* 4 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta cat. 

SVAR:
let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
console.log(animals[0]);
*/

/* 5 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta funky chihuahua. 

SVAR:
let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
console.log(animals[3]);
//Alternativt med .at metoden
console.log(animals.at(-1));
*/

/* 6 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, byt ut hamster mot tiger. 

SVAR:
let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
//Den första är på vilken indexplats som den ska ersätta [1], andra siffran [1] är den första nya objektet som ska in, vill man ha fler så lägger man in t ex [2] med 'dog'.
animals.splice(1, 1, 'tiger', 2, 'dog',);

console.log(animals);
*/

/* 7 */
/* let a = [1,2,3]; */
/* let b = [4,5,6]; */
/* Sätt ihop ovanstående arrayer. 

SVAR:
let a = [1,2,3];
let b = [4, 5,6];
//a.length anger vart den kommer börja nästa rad. 0 menas att inget ska tas bort eller ersättas, ...b är vad som ska läggas till.
a.splice(a.length, 0, ...b);
console.log(a);
*/


/* 8 */
/* let a = [1,2,3,7,8,9]; */
/* let b = [4,5,6]; */
/* Merga in array b på index 3 i array a.. 

SVAR:
let a = [1,2,3,7,8,9];
let b = [4,5,6];

a.splice(3, 0, ...b)

console.log(a);
*/

//METHODS
/* 9 */
/* let arr = ['a', 'b', 'c']; */
/* Klona ovanstående array. 

SVAR:
let arr = ['a', 'b', 'c'];
let copyArr = [...arr];

console.log(copyArr);
*/

/* 10 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Lägg till en frukt i slutet av arrayen ovan. 

SVAR:
let fruits = ['kiwi', 'apple', 'pear'];
fruits.push('banan')
console.log(fruits);
*/


/* 11 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Lägg till en frukt i början av arrayen ovan. 

SVAR:
let fruits = ['kiwi', 'apple', 'pear'];
fruits.unshift('banan')

console.log(fruits);
*/

/* 12 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort sista frukten i arrayen. 

SVAR:
let fruits = ['kiwi', 'apple', 'pear'];
fruits.pop()
console.log(fruits);
*/

/* 13 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort första frukten i arrayen. 

SVAR:
let fruits = ['kiwi', 'apple', 'pear'];
fruits.shift();
console.log(fruits);
*/ 

/* 14 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in en frukt i arrayen ovan på index 1. 

SVAR:
let fruits = ['kiwi', 'apple', 'pear'];
fruits.splice(1, 0, 'banan');
console.log(fruits);
*/

/* 15 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in, tre frukter i arrayen ovan på index 2. 

SVAR:
let fruits = ['kiwi', 'apple', 'pear'];
fruits.splice(2, 0, 'banan', 'mango', 'apelsin');
console.log(fruits);
*/

/* 16 */
/* let names = ['David', 'Christoffer', 'Johan', 'Maja'] */
/* I arrayen ovan, ta bort Christoffer och Johan. 

SVAR:
let names = ['David', 'Christoffer', 'Johan', 'Maja'];
names.splice(1, 2);
console.log(names);
*/

/* 17 */
/* let nums = [1,2,3,4,5,6,7,8,9]; */
/* Spegelvänd på arrayen ovan. 

SVAR:
let nums = [1,2,3,4,5,6,7,8,9];
nums.reverse(); 
console.log(nums);
*/

/* 18 */
/* let str = 'Supercanlifragilisticexpialidocious'; */
/* Kika om strängen ovan innehåller bokstaven n. 

SVAR:
let str = 'Supercalifragnilisticexpialidocious';
console.log(`Finns det något n i ordet?: ${str.includes('n')}`);
console.log(`Det finns på plats: ${str.indexOf('n')}`);
*/

/* 19 */
/* let str = 'Supercalifragilisticexpialidocioxus'; */
/* Kika om strängen ovan innehåller bokstaven x. 

SVAR:
let str = 'Supercalifragilisticexpialidocious';
console.log(`${str.includes('x')}`);
*/

/* 20 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I ovanstående sträng, hitta vilket position första förekomsten av p har.

SVAR: 
let str = 'Supercalifragilisticexpialidocious'; 
console.log(`Den första förekomsten av 'p' kommer på plats ${str.indexOf('p')}`);
*/

/* 21 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 5 första tecknena. 

SVAR:
let str = 'Supercalifragilisticexpialidocious'; 
// SLICE-Metoden är mer flexibel är bättre
console.log(`De första 5 tecknena är ${str.slice(0, 5)}`);
console.log(`De första 5 tecknena är ${str.substring(0, 5)}`);
*/

/* 22 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 7 sista tecknena. 

SVAR:
let str = 'Supercalifragilisticexpialidocious';
console.log(`De sista 7 tecknena är ${str.slice(-7)}`);
*/

//ADVANCED METHODS (HIGH ORDER METHODS)
//.filter()
/* 23 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() 

SVAR:
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
let aboveFive = numArray.filter((parameter) => parameter > 5);
console.log(aboveFive);
*/

/* 24 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() 

SVAR:
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
let underFive = numArray.filter((parameter) => parameter < 5);
console.log(underFive);
*/

/* 25 */
/* Skriv ut alla namn som är 18 år eller över från arrayen. 
let persons = [
  {
    name: "Felicia",
    age: 12,
  },
  {
    name: "Pelle",
    age: 20,
  },
  {
    name: "Peter",
    age: 59,
  },
  {
    name: "Anna",
    age: 32,
  },
  {
    name: "Jocke",
    age: 18,
  },
  {
    name: "Ella",
    age: 3,
  },
];

SVAR:
let eigtheenOrAbove = persons.filter((parameter) => parameter.age > 18);
console.log(eigtheenOrAbove);
*/


/* 26 */
/* Skriv ut alla namn som är under 18 år.
let persons = [
    {
      name: "Felicia",
      age: 12,
    },
    {
      name: "Pelle",
      age: 20,
    },
    {
      name: "Peter",
      age: 59,
    },
    {
      name: "Anna",
      age: 32,
    },
    {
      name: "Jocke",
      age: 18,
    },
    {
      name: "Ella",
      age: 3,
    },
  ];

SVAR:
let underEighteen = persons.filter((parameter) => parameter.age < 18)
console.log(underEighteen);
*/

//.sort()
/* 27 */
/* let arr = ['beta', 'alfa', 'gamma']; */
/* Sortera ovanstående array alfabetisk. Tips: Läs dokumentattionen för sort() 

SVAR:
let arr = ['beta', 'alfa', 'gamma'];
console.log(arr.sort());
*/

/* 28 */
/* let nums = [1,5,7,9,11,3,22,4,2,6,8]; */
/* Sortera ovanstående array numeriskt. 

SVAR:
let nums = [1,5,7,9,11,3,22,4,2,6,8]; 
// Måste lägga in denna funktion (a, b) => a - b för att de ska sortera siffor annars kommer allt över 10 hamna fel.
console.log(nums.sort((a, b) => a - b));
*/

/* 29 */
/* I person-arrayen sortera objekten efter ålder, yngst först. 

SVAR:
let persons = [
    {
      name: "Felicia",
      age: 12,
    },
    {
      name: "Pelle",
      age: 20,
    },
    {
      name: "Peter",
      age: 59,
    },
    {
      name: "Anna",
      age: 32,
    },
    {
      name: "Jocke",
      age: 18,
    },
    {
      name: "Ella",
      age: 3,
    },
  ];

console.log(persons.sort((a, b) => a.age - b.age));
*/

/* 30 */
/* I person-arrayen ovan, sortera objekten efter ålder, äldst först. 

SVAR:
console.log(persons.sort((a, b) => b.age - a.age));
*/

/* 31 */
/* I person-arrayen ovan, sortera objekten i bokstavsordning efter deras namn 

SVAR:
console.log(persons.sort((a, b) => a.name.localeCompare(b.name)));
*/

//.map()
/* 32 */
/* I person-arrayen ovan, gör om alla namn till versaler. 

SVAR:
let persons = [
    {
      name: "Felicia",
      age: 12,
    },
    {
      name: "Pelle",
      age: 20,
    },
    {
      name: "Peter",
      age: 59,
    },
    {
      name: "Anna",
      age: 32,
    },
    {
      name: "Jocke",
      age: 18,
    },
    {
      name: "Ella",
      age: 3,
    },
  ];

let nameUpperCase = persons.map((parameter) => parameter.name.toUpperCase());
console.log(nameUpperCase);
*/

/* 33 */
/* I person-arrayen ovan, spegelvänd alla namn. 

SVAR:
//Först skapas en ny array genom .map där varje objekt sparas i "person". Sedan för att ändra köra namnet baklänges så måste man splitta strängen till enskilda tecken, sedan köra .reverse och därefter sätta ihop det till en sträng igen och returnera det. Med spreadoperatorn ...person betyder att det skapas ett nytt objekt med alla ursprungliga egenskaper.

let reversedNames = persons.map(person => {
  return {
    ...person,
    name: person.name.split('').reverse().join(''),
  };
});

console.log(reversedNames);
*/

//LOOP ARRAYS
/* 34 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en forEach()-loop. console.log() varje ord. 

SVAR:
let fruits = ['apelsin', 'päron', 'äpple', 'kiwi'];

fruits.forEach((fruit, index, array) => {
  console.log(`Här kommer ${fruit} på plats ${index}, och i arrayen: ${array}`);
});
*/

/* 35 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for of-loop. console.log() varje ord. 

SVAR:
let fruits = ['apelsin', 'päron', 'äpple', 'kiwi'];

for (let fruit of fruits) {
  console.log(fruit);
}
*/

/* 36 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for-loop. console.log() varje ord. 

SVAR:
let fruits = ['apelsin', 'päron', 'äpple', 'kiwi'];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${fruits[i]} ligger på plats ${[i]}!`);
}
*/

/* 37 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: */
/* 0 - apelsin */
/* 1 - päron */
/* 2 - äpple */
/* osv... 

SVAR:
//for loop
console.log('Detta är for-loopen');
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i} - ${fruits[i]}`)
};

//forEach loop
console.log('Detta är forEach-loopen');
fruits.forEach((fruits, index) => {
  console.log(`${index} - ${fruits}`);  
});

//for of loop där man måste använda sig av .entries() för att kunna få två parametrar.
console.log('Detta är for of-loopen');
for (let [index, fruit] of fruits.entries()) {
  console.log(`${index} - ${fruit}`);
}

*/


