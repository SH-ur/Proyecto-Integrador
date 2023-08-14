import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import{useState, useEffect}from 'react';
import {addF, deleteF} from '../redux/actions'
//import axios from 'axios'
const Garish = styled.button`
border: 4px solid black`;

const Nombres = styled.h2`
color: brown;
border: 3px solid goldenrod;
border-style: inset;
`
const Card = ({name, id, gender, species, onClose, image})=> {
 const myFavorite = useSelector(state=> state.myFavorites);
const [isFav, setisFav] = useState(false)
const dispatch = useDispatch();



const handleFavorite = ()=>{
   if(isFav){
      setisFav(false);
      dispatch(deleteF(id))
   } else {
      setisFav(true);
      dispatch(addF({name, id, gender, species, image}))
   }
}
useEffect(()=>{
   myFavorite.forEach(fav=>{
      if(fav.id=== id) setisFav(true);
   })
}, )
    return(<div>
   <div>   {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
} </div>

      <Garish onClick={()=>onClose(id)} key={id}>X</Garish>
     <Link to={`/detail/${id}`}><Nombres className='cafe'>{name}</Nombres></Link>
     <h2>{species}</h2>
     <h2>{gender}</h2>
     <img  src={image} alt="No pos... No lo sé Rick, parece falso" /> 
  </div>
);
};
export default Card;
