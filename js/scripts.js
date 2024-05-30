let pokemonRepository = (function () {
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

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();

pokemonRepository.getAll().forEach(function(pokemon){
    if (pokemon.height >= 1.8){
        document.write("<p>" + pokemon.name + " (height: " + pokemon.height +"m) - Wow, that's tall! </p>")
    } else if (pokemon.height){
        document.write("<p>" + pokemon.name + " (height: " + pokemon.height +"m) </p>")
    }
});