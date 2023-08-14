import { useState } from "react";
import {useParams} from 'react-router-dom';
import { useEffect } from "react";
import {Link} from 'react-router-dom';
export default function Detail(){
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID. Error: "+ err);
          });
        return setCharacter({});
      }, [detailId]);
    return(
        <div> Detail <Link to='/home'><button> I said... HOME!</button></Link>
        <h2>{character.name}</h2>
        
        <p>{character?.status}</p>
        <p>{character?.species}</p>
        <p>{character?.origin?.name}</p>
  <img src={character?.image} alt='Hijole creo que no se va a poder.'></img>
  </div>
        

    )
}