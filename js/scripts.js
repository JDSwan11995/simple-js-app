let pokemonList = [
    {
        name: 'Cubone',
        type: 'Ground',
        height: 0.4,
        number: 104,
        disposition: 'Sad'
    },
    {
        name: 'Slowpoke',
        type: ['Psychic', 'Water'],
        height: 1.9,
        number: 79,
        disposition: 'Silly'
    },
    {
        name: 'Mr. Mime',
        type: ['Psychic', 'Fairy'],
        height: 1.8,
        number: 122,
        disposition: 'Nightmare Fuel'
    },
    {
        name: 'Mimikyu',
        type: ['Ghost', 'Fairy'],
        height: 0.8,
        number: 778,
        disposition: 'Lonely'
    },
    {
        name: 'Articuno',
        type: ['Ice', 'Flying'],
        height: 1.7,
        number: 144,
        disposition: 'Godly'
    },
    {
        name: 'Pecharunt',
        type: ['Poison', 'Ghost'],
        height: 0.3,
        number: 1025,
        disposition: 'Excessive'
    },
];

for (let i = 1; i < pokemonList.length; i++) {
    if (pokemonList[i].height === 1.9) {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "kg) -That's Tall! " + "<br>");
    } else {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "kg) " + "<br>")
    }
}