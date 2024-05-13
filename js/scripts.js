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
    }
];

let pokemonList2 = [
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

function printArrayDetails(list){
    for (let i = 0; i < list.length; i++) {
        if (list[i].height === 1.9) {
            document.write("<p>" + list[i].name + " (height: " + list[i].height + "m) - That's Tall! " + "</p>") 
            console.log(list[i].name + " height: " + list[i].height + "m");
        } else {
            document.write("<p>" + list[i].name + " (height: " + list[i].height + "m) " + "</p>")
            console.log(list[i].name + " height: " + list[i].height + "m")
        }
    }
};

printArrayDetails(pokemonList2);

printArrayDetails(pokemonList);
