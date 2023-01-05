const loadPokemon = (id, callback) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {
      callback(data)
    })
}

loadPokemon(56, (pokemon) => {
  console.log(pokemon)
})
