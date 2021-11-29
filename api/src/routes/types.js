const { default: axios } = require('axios');
const { Router } = require('express');
const {Type} = require('../db');

const router = Router();

router.get('/', async (req, res, next) =>{
    try {
        let pokemonsTypes
        const typeDb = await Type.findAll()

        if(typeDb.length === 0 ){
            const typeApi = await axios.get('https://pokeapi.co/api/v2/type')
            // console.log(typeApi.data.results)
            const filterTypeApi = typeApi.data.results.map(p =>{
                return p.name
            })
            // console.log(filterTypeApi)
            pokemonsTypes = await Promise.all(filterTypeApi.map((c) => {return Type.create({name: c})}))
            console.log(pokemonsTypes)
        }

        res.send(pokemonsTypes)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) =>{
    try {
        const {name} = req.body;
        const newType = await Type.create({name})
        res.send(newType);
    } catch (error) {
        next(error)
    }
});

router.put('/', (req, res, next) =>{
    res.send('soy put /types')
});

router.delete('/', (req, res, next) =>{
    res.send('soy delete /types')
});


module.exports = router;