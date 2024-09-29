let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }
 
    function loadList() {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url,
                    };
                    add(pokemon);
                });
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    function loadDetails(pokemon) {
        let url = pokemon.detailsUrl;
        return fetch(url)
        .then(function (response) {
            return response.json();
        })
            .then(function (details) {
                pokemon.imageUrl = details.sprites.front_default;
                pokemon.height = details.height;
                pokemon.weight = details.weight;
                pokemon.types = details.types.map((type) => type.type.name);
                pokemon.abilities = details.abilities.map((ability) => ability.ability.name);
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            let modalTitle = document.querySelector('#pokemonModalLabel');
            let modalImage = document.querySelector('.pokemon-image');
            let modalHeight = document.querySelector('.pokemon-height');
            let modalWeight = document.querySelector('.pokemon-weight');
            let modalTypes= document.querySelector('.pokemon-types');
            let modalAbilities = document.querySelector('.pokemon-abilities');

            modalTitle.innerText = pokemon.name;
            modalImage.src = pokemon.imageUrl;
            modalHeight.innerText = `Height: ${pokemon.height} decimeters`;
            modalWeight.innerText = `Weight: ${pokemon.weight} kilograms`;
            modalTypes.innerText = `Type(s): ${pokemon.types.join(', ')}`;
            modalAbilities.innerText = `Abilities: ${pokemon.abilities.join(', ')}`;

           $('#pokemonModal').modal('show');
        });
    }

    function addListItem(pokemon) {
        let pokemonListElement = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item");

        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("btn", "btn-primary", "w-100");
        button.addEventListener("click", function () {
            showDetails(pokemon);
        });

        listItem.appendChild(button);
        pokemonListElement.appendChild(listItem);
    }

    return {
        add: add,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        addListItem: addListItem,
        showDetails: showDetails,
    };
})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
})