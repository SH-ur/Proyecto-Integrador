import Card from './Card';
import styled from 'styled-components';

const Patuta = styled.div`color: brown;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: auto;
padding: 2 em;
border-radius: 15px;`
export default function Cards({characters, onClose}) {
   console.log(characters);
   return (<Patuta>
      {characters.map(({name, species, gender, image, id})=>{
         return <Card
         key={id}
      name={name}
      gender={gender}
      species={species}
      image={image}
        id= {id}
         onClose={onClose}></Card>
      })
   }
   </Patuta>
)
}
