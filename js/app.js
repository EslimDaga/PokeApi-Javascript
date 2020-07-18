const pokemons = document.getElementById("pokemons")

const getPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url)
      .then((res) => res.json()));
  }
  Promise.all(promises)
    .then((results) => {
      const pokemon = results.map((result) => ({
        id : result.id,
        image : result.sprites.front_default,
        name : result.name,
        type : result.types[0].type.name,
        height : result.height,
        weight : result.weight
      }));
      renderPokemon(pokemon)
    })
}

const renderPokemon = (pokemon) => {
  console.log(pokemon);
  const pokemonDisplay = pokemon.map((poke) => `
  <div class="col-lg-4" data-aos="fade-up">
    <div class="service service-style-1">
      <img src="${poke.image}" alt="Services" />
      <h5 class="service-title">${poke.name}</h5>
      <span class="service-text">${poke.type}</span>
      <label>Weigth</label>
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-default" role="progressbar" style="width: ${poke.height}%;" aria-valuenow="${poke.height}" aria-valuemin="0" aria-valuemax="100">${poke.height}%</div>
      </div>
      <label>Weigth</label>
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-default" role="progressbar" style="width: ${poke.weight}%;" aria-valuenow="${poke.weight}" aria-valuemin="0" aria-valuemax="100">${poke.weight}%</div>
      </div>
    </div>
  </div>
  `).join("")
  pokemons.innerHTML = pokemonDisplay;
}

getPokemon()


