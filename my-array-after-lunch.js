'use strict';
// console.log(pokemons);

// for (let i = 0; i < pokemons.length; i++) {
//     console.log(pokemons[i], i);    
// }

// // Med denna version så kan man inte få ut vilken indexering (vilken plats som det ligger i).
// for (let pokemon of pokemons) {
//     console.log(pokemon);
// }

// // Higher order function,
// pokemons.forEach((pokemon, index) => {console.log(`På plats ${index} hittar vi ingen mindre än ${pokemon}`)});


// // 
// let numbers = [100, 11, 1, 15, 155];
// numbers.sort((a, b) => a - b);

// console.log(numbers);

// let arr = ['a', 'b', 'c'];
// // Detta kallas för spread, dvs ...arr
// let kopiaArray = [...arr];

// console.log(kopiaArray);


let pokemonTrainers = [
    {
        name: 'Ash Ketchum',
        age: 10,
        address: {
            street: 'Street Road',
            houseNumber: 1,
            zip: 66731,
            city: 'Pallet Town'
        },
        pokemons: ['Pikachu', 'Bulbasaur'],
        catchPhrase: (pokemon) => {
            return `${pokemon}, i choose you`;
        }            
    },

    {
        name: 'Jesper Nyberg',
        age: 33,
        address: {
            street: 'Anjalagatan',
            houseNumber: 5,
            zip: 66434,
            city: 'Grums'
        },
        pokemons: ['Charmander', 'Diglett'],
        catchPhrase: function hej() {
            //För att använda this. måste man använda en vanlig function och inte en arrowFunction.
            console.log(`${this.hej[1]}, i choose you`);            
        },
    },

    {
        name: 'Lam Mai',
        age: 37,
        address: {
            street: 'Klockstigen',
            houseNumber: 27,
            zip: 12354,
            city: 'Forshaga'
        },
        pokemons: ['Rapidash', 'Slowbro'],
        catchPhrase: (pokemon) => {
            console.log(`${pokemon}, i choose you`);            
        }
    }
]

pokemonTrainers[0].catchPhrase();

//Slumpa fram mellan 0 till hur många som det finns i arrayen, så då är det val mellan Ash, Jesper och Lam, dvs 3 st som finns..
let trainer = pokemonTrainers[Math.floor(Math.random() * pokemonTrainers.length)];
console.log(trainer.name);

//Här för att få ut trainers pokemon där det kommer randomiserat.
console.log(trainer.catchPhrase(trainer.pokemons[Math.floor(Math.random() * trainer.pokemons.length)]));
console.log(trainer.catchPhrase(trainer.pokemons[1]));




console.log(`En dag när den ${trainer.age}-årige pokemontränaren ${trainer.name} var ute och spatserade i skogen tillsammans med sina pokemons så träffade han på en annan tränare. Omedelbart gjorde de sig redo för strid! ${trainer.name} ropade högt: ${trainer.catchPhrase(trainer.pokemons[Math.floor(Math.random() * trainer.pokemons.length)].name)}, och den andra tränaren svarade med att skicka ut sin egen pokemon. Efter att ha mosat sin motståndare så sa ${trainer.name}: jag skall bli världens störste pokemonmästare! Sedan fortsatte han sin resa genom ${trainer.address.city} för att komma fram till slutmålet för sin resa: ${trainer.address.street} ${trainer.address.number}`);