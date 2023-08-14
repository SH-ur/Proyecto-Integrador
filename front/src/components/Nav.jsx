
import SearchBar from './SearchBar';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
const Divagando = styled.nav`
background-color: green;
padding: 2px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const Hiyaaaa = styled.div`
background-color: brown;
display: flex;
justify-content: space-around;`
export default function Nav({onSearch}){
    return (
    <Divagando>
      <Hiyaaaa><Link to='/' style={{color: 'yellow', border: '3px solid purple'}}><p>LOG OUT!</p></Link>
      <Link to='about'>
        <p>Some String About...</p>
      </Link>
      <Link to='favorites'> <p> Have a Favorite?</p></Link>
      <Link to='home'> <p>Take me HOME</p></Link></Hiyaaaa>
      <SearchBar 
      onSearch={onSearch} />
  </Divagando>
    )
}