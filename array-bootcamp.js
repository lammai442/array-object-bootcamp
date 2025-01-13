'use strict';

//THE BASICS
/* 1 */
/* Gör en array som innehåller 5 st olika frukter av datatypen string. 

Svar:
let fruits = ['Banan', 'Äpple', 'Kiwi', 'Melon', 'Apelsin']
console.log(fruits);
*/

/* 2 */
/* Gör en array som innehåller 4 olika datatyper, ex. string, number, array. 

Svar:
let randomObjects = ['Banan', 3, true, ['Chiwawa', 'bulldog']];
console.log(randomObjects);
*/

/* 3 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* console.log() hur många objekt arrayen ovan innehåller. 

Svar:
let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'];
console.log(`Hela arrayen innehåler ${animals.length} objekter och den andra har ${animals[1].length} tecken`);
*/

/* 4 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta cat. 

Svar:
let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
console.log(animals[0]);
*/

/* 5 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta funky chihuahua. 

Svar:
let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
console.log(animals[3]);
//Alternativt med .at metoden
console.log(animals.at(-1));
*/

/* 6 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, byt ut hamster mot tiger. 

Svar:
let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
//Den första är på vilken indexplats som den ska ersätta [1], andra siffran [1] är den första nya objektet som ska in, vill man ha fler så lägger man in t ex [2] med 'dog'.
animals.splice(1, 1, 'tiger', 2, 'dog',);

console.log(animals);
*/

/* 7 */
/* let a = [1,2,3]; */
/* let b = [4,5,6]; */
/* Sätt ihop ovanstående arrayer. 

Svar:
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

Svar:
let a = [1,2,3,7,8,9];
let b = [4,5,6];

a.splice(3, 0, ...b)

console.log(a);
*/

//METHODS
/* 9 */
/* let arr = ['a', 'b', 'c']; */
/* Klona ovanstående array. 

Svar:
let arr = ['a', 'b', 'c'];
let copyArr = [...arr];

console.log(copyArr);
*/

/* 10 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Lägg till en frukt i slutet av arrayen ovan. 

Svar:
let fruits = ['kiwi', 'apple', 'pear'];
fruits.push('banan')
console.log(fruits);
*/


/* 11 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Lägg till en frukt i början av arrayen ovan. 

Svar:
let fruits = ['kiwi', 'apple', 'pear'];
fruits.unshift('banan')

console.log(fruits);
*/

/* 12 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort sista frukten i arrayen. 

Svar:
let fruits = ['kiwi', 'apple', 'pear'];
fruits.pop()
console.log(fruits);
*/

/* 13 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort första frukten i arrayen. 

Svar:
let fruits = ['kiwi', 'apple', 'pear'];
fruits.shift();
console.log(fruits);
*/ 

/* 14 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in en frukt i arrayen ovan på index 1. 

Svar:
let fruits = ['kiwi', 'apple', 'pear'];
fruits.splice(1, 0, 'banan');
console.log(fruits);
*/

/* 15 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in, tre frukter i arrayen ovan på index 2. 

Svar:
let fruits = ['kiwi', 'apple', 'pear'];
fruits.splice(2, 0, 'banan', 'mango', 'apelsin');
console.log(fruits);
*/

/* 16 */
/* let names = ['David', 'Christoffer', 'Johan', 'Maja'] */
/* I arrayen ovan, ta bort Christoffer och Johan. 

Svar:
let names = ['David', 'Christoffer', 'Johan', 'Maja'];
names.splice(1, 2);
console.log(names);
*/

/* 17 */
/* let nums = [1,2,3,4,5,6,7,8,9]; */
/* Spegelvänd på arrayen ovan. 

Svar:
let nums = [1,2,3,4,5,6,7,8,9];
nums.reverse(); 
console.log(nums);
*/

/* 18 */
/* let str = 'Supercanlifragilisticexpialidocious'; */
/* Kika om strängen ovan innehåller bokstaven n. 

Svar:
let str = 'Supercalifragnilisticexpialidocious';
console.log(`Finns det något n i ordet?: ${str.includes('n')}`);
console.log(`Det finns på plats: ${str.indexOf('n')}`);
*/

/* 19 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* Kika om strängen ovan innehåller bokstaven x. */
console.log('Uppgift 19');

/* 20 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I ovanstående sträng, hitta vilket position första förekomsten av p har. */
console.log('Uppgift 20');


/* 21 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 5 första tecknena. */
console.log('Uppgift 21');


/* 22 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 7 sista tecknena. */
console.log('Uppgift 22');

//ADVANCED METHODS (HIGH ORDER METHODS)
/* 23 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() */
console.log('Uppgift 23');


/* 24 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() */
console.log('Uppgift 24');


/* 25 */
/* Skriv ut alla namn som är 18 år eller över från arrayen längst ner i dokumentet. */
console.log('Uppgift 25');


/* 26 */
/* Skriv ut alla namn som är under 18 år från arrayen längst ner i dokumentet. */
console.log('Uppgift 26');


/* 27 */
/* let arr = ['beta', 'alfa', 'gamma']; */
/* Sortera ovanstående array alfabetisk. Tips: Läs dokumentattionen för sort() */
console.log('Uppgift 27');


/* 28 */
/* let nums = [1,5,7,9,3,4,2,6,8]; */
/* Sortera ovanstående array numeriskt. */
console.log('Uppgift 28');


//Array innehållandes flera objekt
let persons = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    }
]

/* 29 */
/* I person-arrayen längst ovan, sortera objekten efter ålder, yngst först. */
console.log('Uppgift 29');


/* 30 */
/* I person-arrayen ovan, sortera objekten efter ålder, äldst först. */
console.log('Uppgift 30');


/* 31 */
/* I person-arrayen ovan, sortera objekten i bokstavsordning efter deras namn */
console.log('Uppgift 31');


/* 32 */
/* I person-arrayen ovan, gör om alla namn till versaler. */
console.log('Uppgift 32');


/* 33 */
/* I person-arrayen ovan, spegelvänd alla namn. */
console.log('Uppgift 33');


/* 34 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en forEach()-loop. console.log() varje ord. */
console.log('Uppgift 34');


/* 35 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for of-loop. console.log() varje ord. */
console.log('Uppgift 35');


/* 36 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for-loop. console.log() varje ord. */
console.log('Uppgift 36');


/* 37 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: */
/* 0 - apelsin */
/* 1 - päron */
/* 2 - äpple */
/* osv... */
console.log('Uppgift 37');