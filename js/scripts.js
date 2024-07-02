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

    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function(event){
            pokemonRepository.showDetails(pokemon)
        });
    }

    function showDetails(pokemon){
        console.log(pokemon.name);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
    };
})();

pokemonRepository.add({name: 'Pikachu', type: 'Electric', height: 0.4, number: 25, disposition: 'Somewhat Basic'})

pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
});
