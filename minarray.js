let pokemons = ['Bulbasur', 'Squirtle', 'Carmander', 'Pikachu', 'hej'];
let myName = 'Jesper';
console.log((pokemons));

console.log((Array.isArray(pokemons)));
console.log(Array.isArray(myName));

pokemons.push('Butterfree');
console.log(pokemons);

let removed = pokemons.pop();
console.log(pokemons);
console.log((`${removed} was removed`));

//Tar bort ett element
removed = pokemons.shift();
console.log(pokemons);
console.log((`${removed} was removed`));

pokemons.unshift('Abra');
console.log(pokemons);

let position = pokemons.indexOf('Pikachu');
console.log(pokemons[position]);

console.log(pokemons);

let newArray = pokemons.slice(1, 3);
console.log(newArray);
console.log(pokemons);

pokemons.splice(1, 2);
console.log(pokemons);

for (let i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i]);
    console.log(`${pokemons[i]} hittas på plats ${[i]}`);
    
    
}

// For ..of-loop som loopar igenom och skapar en ny variabel för varje element. Denna är bra om man inte behöver ett specifikt index till något.
for(let pokemon of pokemons) {
    console.log(pokemon);    
}

//En foreach loop är en higher order function som tar en annan funktion som argument. Det här kan man ta emot flera argument.
pokemons.forEach((pokemon, index) => console.log(`${pokemon} hittas på plats ${index}`));

//Funkar som [index] Men om man anger -1 får man ut det sista värdet.
console.log(pokemons.at(1));
console.log(pokemons.at(-2));


// OBJECTS!

// I ett objekt kan man lagra ett objekt/array.
let pokemon = {
    name: 'Picachu',
    index: 26,
    type: 'Elextric',
    /* Nytt objekt */
    stats: {
        attack: 45,
        defense: 55,
        hp: 70
    },
    // Ny array
    habitats: ['forest', 'city']
}
;

console.log((pokemon));
console.log(pokemon.name);
console.log(pokemon.stats);
console.log(pokemon.stats.defense);
console.log(pokemon.habitats[1]);

// Lägger till isDangerous
pokemon.isDangerous = true;
console.log(pokemon);


delete pokemon.habitats;
console.log(pokemon);

// For..in-loop loopar sig igenom alla nyckelvärdepar i ett objekt
for(let prop in pokemon) {
    console.log(prop);
}

let pokemon




