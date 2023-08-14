import axios from "axios";
import { ADD_FAV, DELETE_FAV, ORDER, FILTER } from "./action-types";

export const addF = async(charact)=>{
    try{
        const response = await axios.post('http://localhost:3001/rickandmorty/fav', charact)
        return {type: ADD_FAV, payload:response.data}
    }catch(err){
        alert('Algo falló: mensaje de error ' + err.message)
    }
   
}
//export const addF = async(charact)=>{
//    try{
//    return {type: ADD_FAV, payload: charact}
//    }catch(err){
//        
//    }
//}
export const deleteF = async(id)=>{
    try{
    return {type: DELETE_FAV, payload:await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`, id)
.then(resolve=> console.log('Succesful! ' + resolve))}}
    catch(error){
        console.log(error.message);
    }
}

export const getFavorites= async(character)=>{
    try{
        return {type: 'GET_FAVS', payload: await axios.get('http://localhost:3001/rickandmorty/fav', character)
    .then(resolute=> console.log('The method '+ resolute + ' was succesfull'))}
    }
    catch(error){
        console.log('En caso de... acuerdate del Furret que camina')
    }
}
export const filterCards = (gender)=>{
    return {type: FILTER, payload: gender};
}
export const orderCards = (id)=>{
    return {type: ORDER, payload: id}
}