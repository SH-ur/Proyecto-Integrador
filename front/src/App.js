import './App.css'
import Cards from './components/Cards.jsx'
import { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import About from './components/About';
import Detail from './components/Detail';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favs/Favorites';
function App () {
  const [characters, setCharact] = useState([])
  const [access, setAcess]= useState(false);
  const navigate = useNavigate();
  const username= 'sdjsm20054@gmail.com';
  const password= '31minutes'
  const location = useLocation()
  
  const login = (userData)=>{
    if(userData.username === username && userData.password === password){
      setAcess(true);
      navigate('home');
    }
  }
  useEffect(()=>{!access&&navigate('/')}, [access, navigate]);
  
  const onSearch = (character)=>{
    const URL = "http://localhost:3001"
    //const KEY = '0cf7b1dc4eae.76519a01498f54d82cde'
    fetch(`${URL}/onsearch/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharact((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
  }
  const onClose= (id)=>{
    console.log(id);
    setCharact(characters.filter(charact=> charact.id!== id))
        }
  return (
    <div className='App' style={{padding: "0px", backgroundImage: 'url("https://pokemon-go.name/wp-content/uploads/2022/05/den-reidov-mega-kangaskhan-v-pokemon-go-1-05-2022-1024x591.jpg")', backgroundAttachment: "fixed", backgroundSize: "cover", minHeight: "1000px"}}>
      <hr />
      {location.pathname === '/' ? <Form login={login}/>: <Nav onSearch={onSearch}></Nav>}
      
      <Routes>
        <Route path='home' element={<div>
           <Cards onClose={onClose} characters={characters}/></div>}></Route>
      <Route path='about' element={<About/>}/>
      <Route path='detail/:detailId' element={<Detail/>}/>
      <Route path='favorites' element={<Favorites/>}/>
      </Routes>
      <hr />
     
    </div>
  )
}

export default App
