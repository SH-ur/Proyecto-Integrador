//esto es de la integración de express
const axios = require('axios')

 const getCharDetail=async (req,res)=>{
    const{id}= req.params;
try{
    await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
.then(response=>{
    const {id, name, species, image, gender, origin}= response.data;
   return res.status(200).json({id, name, species, image, gender, origin});}
)
}catch(error){
    res.status(400).json({error:error.message})
}}
module.exports= getCharDetail;
//Esto es del async await
//const getCharDetail= async(res, id)=>{
//    try{
//    await axios(`https://rickandmortyapi.com/api/character/${id}`)
//    .then(result=> result.data)
//    .then(data=> {
//        let charactD={
//            image: data.image,
//            name: data.name,
//            gender: data.gender,
//            status: data.status,
//            origin: data.origin,
//            species: data.species
//        }
//        res.writeHead(200, {'Content-Type': 'application/json'})
//    res.end(JSON.stringify(charactD))})
//    
//}catch(err){
//    res.writeHead(500, {'Content-Type': 'text/plain'})
//    res.end(`No se encontró este id: ${id}`)
//}
//}
//
//module.exports= getCharDetail;
