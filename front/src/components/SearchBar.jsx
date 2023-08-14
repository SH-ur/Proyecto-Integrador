import { useState } from "react";
export default function SearchBar({onSearch}) {
const[characters, setCharact] = useState('')

const handleChange = (event) => {
   setCharact(event.target.value);
}
   return (
      <div>
         <input type='search' value={characters} onChange={handleChange}/>
         <button onClick={()=>onSearch(characters)}>Agregar</button>
      </div>
   );
}
