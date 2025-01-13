console.log('Hello, world!');

let pokemons = ['Bulbasaur', 'Squirtle', 'Charmander', 'Pikachu'];
let myName = 'Jesper';
console.log(pokemons);

// isArray kan användas för att kolla om en variabel är en array
console.log(Array.isArray(pokemons));
console.log(Array.isArray(myName));

// .Push() lägger till ett element i slutet av en array
pokemons.push('Butterfree');
console.log(pokemons);

// .pop() tar bort det sista elementet i en array
let removed = pokemons.pop();
console.log(pokemons);
console.log(`${removed} was removed`);

// .shift() tar bort det första elementet i en array
removed = pokemons.shift();
console.log(pokemons);
console.log(`${removed} was removed`);

//.unshift() lägger till ett element i början av en array
pokemons.unshift('Abra');
console.log(pokemons);
pokemons.unshift('Meowth');

// .indexOf() kan användas för att hitta index till ett specifikt värde
let position = pokemons.indexOf('Pikachu');

console.log(pokemons[3]);
console.log(pokemons[position]);

// .slice() kan användas för att skapa en ny array från en existerande array
console.log(pokemons);
let newArray = pokemons.slice(1, 3);
console.log(newArray);
console.log(pokemons);

// .splice() kan användas för att ta bort element från en array och returnera dem i en ny array
let pokArray = pokemons.splice(1, 2);
console.log(pokemons);
console.log(pokArray);

// Loopa igenom array med vanlig for-loop
for(let i = 0; i < pokemons.length; i++) {
    console.log(`${pokemons[i]} hittas på plats ${i}`);
}

// For..of-loop
for(let pokemon of pokemons) {
    console.log(pokemon);
}

// For Each är en sk HOF som tar emot en annan funktion som argument. Används för att lopa igenom arrayer
pokemons.forEach((hund, fiskmås) => console.log(`${hund} hittas på plats ${fiskmås}`));

// Funkar som [index] MEN om man anger -1 får man ut det sista värdet
console.log(pokemons.at(-1));

// Objects!

// let pokemon = {
//     name: 'Pikachu',
//     index: 26,
//     type: 'Electric',
//     stats: {
//         attack: 45,
//         defense: 55,
//         hp: 70
//     },
//     habitats: ['forest', 'city']
// };

// console.log(pokemon);
// console.log(pokemon.name);
// console.log(pokemon.stats);
// console.log(pokemon.stats.attack);
// console.log(pokemon.habitats[1]);

// pokemon.isDangerous = true;

// console.log(pokemon);
// delete pokemon.habitats;
// console.log(pokemon);

// // For..in-loop loopar sig igenom alla nyckelvärdepar i ett objekt
// for(let prop in pokemon) {
//     console.log(prop);
// }


let pokemonArray = [
    {
        id: 1,
        name: 'Bulbasaur',
        type: [
            { name: 'Grass', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        stats: {
            hp: 45,
            attack: 49,
            specialAttack: 65,
            defense: 49,
            specialDefense: 65,
            speed: 45,
            total: 318
        }
    },
    {
        id: 2,
        name: 'Ivysaur',
        type: [
            { name: 'Grass', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
        stats: {
            hp: 60,
            attack: 62,
            specialAttack: 80,
            defense: 63,
            specialDefense: 80,
            speed: 60,
            total: 405
        }
    },
    {
        id: 3,
        name: 'Venusaur',
        type: [
            { name: 'Grass', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
        stats: {
            hp: 80,
            attack: 82,
            specialAttack: 100,
            defense: 83,
            specialDefense: 100,
            speed: 80,
            total: 525
        }
    },
    {
        id: 4,
        name: 'Charmander',
        type: [
            { name: 'Fire', color: 'orange' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        stats: {
            hp: 39,
            attack: 52,
            specialAttack: 60,
            defense: 43,
            specialDefense: 50,
            speed: 65,
            total: 309
        }
    },
    {
        id: 5,
        name: 'Charmeleon',
        type: [
            { name: 'Fire', color: 'orange' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
        stats: {
            hp: 58,
            attack: 64,
            specialAttack: 80,
            defense: 58,
            specialDefense: 65,
            speed: 80,
            total: 405
        }
    },
    {
        id: 6,
        name: 'Charizard',
        type: [
            { name: 'Fire', color: 'orange' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
        stats: {
            hp: 78,
            attack: 84,
            specialAttack: 109,
            defense: 78,
            specialDefense: 85,
            speed: 100,
            total: 534
        }
    },
    {
        id: 7,
        name: 'Squirtle',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        stats: {
            hp: 44,
            attack: 48,
            specialAttack: 50,
            defense: 65,
            specialDefense: 64,
            speed: 43,
            total: 314
        }
    },
    {
        id: 8,
        name: 'Wartortle',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
        stats: {
            hp: 59,
            attack: 63,
            specialAttack: 65,
            defense: 80,
            specialDefense: 80,
            speed: 58,
            total: 405
        }
    },
    {
        id: 9,
        name: 'Blastoise',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
        stats: {
            hp: 79,
            attack: 83,
            specialAttack: 85,
            defense: 100,
            specialDefense: 105,
            speed: 78,
            total: 530
        }
    }
];


let highest = 0;
let leader = '';

for(let pokemon of pokemonArray) {
    if(pokemon.stats.specialAttack > highest) {
        highest = pokemon.stats.specialAttack;
        leader = pokemon.name;
    }
}

console.log(`${leader} har högst special attack med sina ${highest}`);

console.log(pokemonArray[5].type[1].name);
console.log(pokemonArray);


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

let person = {
    name: 'Jesper',
    age: 33,
    address: {
        street: 'Anjalagatan',
        number: 5,
        zipcode: 66434,
        city: 'Grums'
    },
    hobbies: ['football', 'movies']
}