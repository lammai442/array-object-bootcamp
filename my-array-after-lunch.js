
console.log(pokemons);

for (let i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i], i);    
}

// Med denna version så kan man inte få ut vilken indexering (vilken plats som det ligger i).
for (let pokemon of pokemons) {
    console.log(pokemon);
}

// Higher order function,
pokemons.forEach((pokemon, index) => {console.log(`På plats ${index} hittar vi ingen mindre än ${pokemon}`)});


// 
let numbers = [100, 11, 1, 15, 155];
numbers.sort((a, b) => a - b);

console.log(numbers);

let arr = ['a', 'b', 'c'];
// Detta kallas för spread, dvs ...arr
let kopiaArray = [...arr];

console.log(kopiaArray);


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
        cathPhrase: (pokemon) => {
            return `${pokemon}, i choose you`
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
        cathPhrase: function() {
            //För att använda this. måste man använda en vanlig function och inte en arrowFunction.
            console.log(`${this.pokemons[0]}, i choose you`);            
        }
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
        cathPhrase: function() {
            //För att använda this. måste man använda en vanlig function och inte en arrowFunction.
            console.log(`${this.pokemons[0]}, i choose you`);            
        }
    }
]

pokemonTrainers[0].cathPhrase();

let trainer = pokemonTrainers[Math.floor(Math.random() * pokemonTrainers.length)];
console.log(trainer.name);


console.log(trainer.cathPhrase(trainer.pokemons[Math.floor(Math.random() * trainer.pokemons.length)]));


