const {Router} = require('express');
const favs =require('../utils/favs')
const getCharById = require('../controllers/getCharById')
const getCharByDetail = require('../controllers/getCharDetail')

const router = Router();

router.get('/onsearch/:id', getCharById)
router.get('/detail/:id', getCharByDetail)

router.post('/rickandmorty/fav', (req, res)=>{
    const{character} = req.body;
try{
    const pushear = favs.push(character);
    res.status(200).json({status: "OK"})
}catch(err){
    res.status(400).json({error: err.message})
}
})

router.get('/rickandmorty/fav', (req, res)=>{
res.status(200).json(favs)
})

router.delete('/rickandmorty/fav/:id', (req, res)=>{
    const {id} = req.params;

    favs =favs.filter(f=>f.id != id);
    res.status(200).json({status: 'OK!!'});
})


module.exports= router;