const axios =require('axios')

const URL = 'https://rickandmortyapi.com/api/character/';
 const getCharById = async (req, res)=>{
    const {id}= req.params;
try{
   await axios.get(`${URL}${id}`)
    .then(response=>{
      const {id, name, species, image, gender} = response.data;
      res.status(200).json({id, name, species, image, gender})})}
      catch(error){
        res.status(500).json({error: error.message})
      }
}
module.exports= getCharById;
//const getCharById = (res, ID)=>{
//axios(`https://rickandmortyapi.com/api/character/${ID}`)
//.then(result=> result.data)
//.then(data=> {
//    let charact={
//        id: data.id,
//        image: data.image,
//        name: data.name,
//        gender: data.gender,
//        species: data.species
//    }
//    res.writeHead(200, {'Content-Type': 'application/json'})
//res.end(JSON.stringify(charact))
//}).catch(err=>{
//    res.writeHead(500, {'Content-Type': 'text/plain'})
//    res.end(`No se encontró este id: ${ID}`)
//})
//}


//esto es del async
//const getCharById =async(res, ID)=>{
//    try{
//        await axios(`https://rickandmortyapi.com/api/character/${ID}`)
//        .then(response=>{
//            let characts ={
//                id: response.data.id,
//                image: response.data.image,
//                name: response.data.name,
//       gender: response.data.gender,
//        species: response.data.species
//            }
//            res.writeHead(200, {'Content-Type': 'application/json'})
//res.end(JSON.stringify(characts))
//        })
//    }catch(error){
//        res.writeHead(500, {'Content-Type': 'text/plain'})
//   res.end(`No se encontró este id: ${ID}`)
//    }
//}
//module.exports= getCharById;