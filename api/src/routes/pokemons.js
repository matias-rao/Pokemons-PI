const { Router } = require("express");
const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { type } = require("os");


const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { name } = req.query;
    let pokemonApi;
    let pokemonDb;

    // Me fijo si le pasaron por query el nombre
    if (name) {
      try {
        pokemonDb = await Pokemon.findOne({
          include: Type,
          where: { name: name },
        });
        // Me fijo si el nombre pasado por query existe en mi DB
        pokemonDb.types = pokemonDb.types.map((t) => t.name)
        if (pokemonDb) {
          res.send(pokemonDb);
        } else {
          // Sino lo busco en la PokeApi
          pokemonApi = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );
          let pokemon = {
            name: pokemonApi.data.name,
            id: pokemonApi.data.id,
            // img: pokemonApi.data.sprites.front_default,
            img: pokemonApi.data.sprites.other.dream_world.front_default,
            types: pokemonApi.data.types.map((t) => {
              return " " + t.type.name + " ";
            })
          };
          res.send(pokemon);
        }
      } catch (error) {
        // Si el nombre pasado por query no se encuentra ni en la Db ni en la Api se envia msj error
        res.send("Pokemon no encontrado");
      }
    } else {
      // Si no le pasaron query busca todos los pokemons de la api y la db
      pokemonApi = await axios.get("https://pokeapi.co/api/v2/pokemon");
      pokemonDb = await Pokemon.findAll({ include: Type }); //promesa

      Promise.all([pokemonApi, pokemonDb]).then(async (respuesta) => {
        const [pokeApi, pokeDb] = respuesta;
        
        let pokeDbFilter = pokeDb.map((t) => {return {name: t.name, id: t.id, img: t.img, hp: t.hp, attack: t.attack, defense: t.defense, speed: t.speed, height: t.height, weight: t.weight, types: t.types.map((p) => p.name)}});
        // console.log(pokeDbFilter)
        
        let pokemonsNext = pokeApi.data.next
        // console.log(pokemonsNext)
        let pokemonsNextData = await axios.get(pokemonsNext)
        // console.log(pokemonsNextData.data)
        let filteredPokemonsNext = pokemonsNextData.data.results.map((pokemon) => {
          return {
            name: pokemon.name,
            url: pokemon.url,
          };
        });

        let filteredPokemons = pokeApi.data.results.map((pokemon) => {
          return {
            name: pokemon.name,
            url: pokemon.url,
          };
        });

        filteredPokemons = [...filteredPokemons, ...filteredPokemonsNext]

        const pokemonitosData = await Promise.all(
          filteredPokemons.map(async (c) => {
            const pokemonData = await axios.get(c.url);

            return {
              id: pokemonData.data.id,
              name: pokemonData.data.name,
              img: pokemonData.data.sprites.other.dream_world.front_default,
              attack: pokemonData.data.stats[1].base_stat,
              types: pokemonData.data.types.map((t) => {
                return t.type.name + " ";
              }),
            };
          })
        );

        let allPokemons = [...pokeDbFilter, ...pokemonitosData];
        res.send(allPokemons);
      });
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:idPokemon", async (req, res, next) => {
  try {
    const { idPokemon } = req.params;
    let pokemon;
    if (typeof idPokemon === "string" && idPokemon.length > 8) {
      pokemon = await Pokemon.findByPk(idPokemon, {include: Type});
      pokemon.types = pokemon.types.map((t) => t.name)
      console.log(pokemon)
      res.send(pokemon);
    } else {
      let idPokemonApi = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
      );
      pokemon = idPokemonApi.data;
      res.send(pokemon);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, img, hp, attack, defense, speed, height, weight, types } = req.body;
    let newPokemon = await Pokemon.create({ name, img, hp, attack, defense, speed, height, weight });
    
    let typesDb = await Type.findAll({
      where: {name: types},
      raw: true
    })
    let typesDbb = typesDb.map(e => {return e.id})
    // let asd = typesDb.map(e => {return e.name})
    newPokemon.addType(typesDbb)
    // console.log(typesDb)
    // console.log(newPokemon)
     
    res.send(newPokemon);
  } catch (error) {
    next(error);
  }
});

router.post("/:pokemonId/type/:typeId", async (req, res) => {
  try {
    const { pokemonId, typeId } = req.params;
    const pokemon = await Pokemon.findByPk(pokemonId);
    await pokemon.addType(typeId);
    res.send(200);
  } catch (error) {
    next(error);
  }
});

router.put("/", (req, res, next) => {
  res.send("soy put /pokemons");
});

router.delete("/", (req, res, next) => {
  res.send("soy delete /pokemons");
});

module.exports = router;
