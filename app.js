const pokemon = require('./data.js');
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

// Exercise 1

console.dir(pokemon, { maxArrayLength: null });
// console.log just the Pokemon with number 59 (Arcanine)
console.log(pokemon[58].name);


// Exercise 2

console.log(game);


// Exercise 3

game.difficulty = "Medium";


// Exercise 4

const starter = pokemon.find(p => p.starter === true);
game.party.push(starter);

// Exercise 5

const extraPokemon = [
  pokemon.find(p => p.name === "Pidgey"),
  pokemon.find(p => p.name === "Oddish"),
  pokemon.find(p => p.name === "Poliwag")
];
game.party.push(...extraPokemon);


// Exercise 6

game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});


// Exercise 7

const evolutionMap = {
  Bulbasaur: "Ivysaur",
  Charmander: "Charmeleon",
  Squirtle: "Wartortle",
  Pikachu: "Raichu"
};

game.party.forEach((poke, i) => {
  if (evolutionMap[poke.name]) {
    const evolved = pokemon.find(p => p.name === evolutionMap[poke.name]);
    game.party.splice(i, 1, evolved);
  }
});


// Exercise 8

game.party.forEach(p => console.log(p.name));


// Exercise 9

pokemon.filter(p => p.starter).forEach(p => console.log(p.name));

// Exercise 10

game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};

game.catchPokemon(pokemon.find(p => p.name === "Eevee"));


// Exercise 11

game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
  const pokeball = this.items.find(i => i.name === "pokeball");
  pokeball.quantity--;
};

game.catchPokemon(pokemon.find(p => p.name === "Jigglypuff"));
console.log(game.items);


// Exercise 12

game.gyms.forEach(gym => {
  if (gym.difficulty < 6) gym.completed = true;
});


// Exercise 13

game.gymStatus = function() {
  const gymTally = { completed: 0, incomplete: 0 };
  this.gyms.forEach(gym => {
    if (gym.completed) gymTally.completed++;
    else gymTally.incomplete++;
  });
  console.log(gymTally);
};

game.gymStatus();


// Exercise 14

game.partyCount = function() {
  return this.party.length;
};

console.log("Party count:", game.partyCount());


// Exercise 15

game.gyms.forEach(gym => {
  if (gym.difficulty < 8) gym.completed = true;
});


// Exercise 16

console.log(game);