 import styled from 'styled-components';
 import {useState} from 'react';
 import validation from './validation'
 const Patata = styled.form`
 background-color: goldenrod;
 display: flex;
 flex-direction: column;`;
 const LetmyIn = styled.input` width: 25%;
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 margin: auto;`
 const ButtonLog = styled.button`color: violet;
 margin: auto;
 display: flex;
 justify-content: space-around;
 width: 25%;`
 const Form = ({login})=>{
    const [userData, setUserData]= useState({username:'', password:''});
    const [errors, setErrors]=useState({username:'', password:''});
    const handlerInputChange = (event)=>{
        const property = event.target.name;
        const value = event.target.value;
        setUserData({...userData, [property]: value});
        setErrors(validation({...userData, [property]: value}))
        
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
    login(userData);
    }
    return(
        <Patata onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
                <LetmyIn type='text' name='username' onChange={handlerInputChange} value={userData.username}/> 
{errors.username && <p style={{color: 'red'}}> {errors.username}; </p>}
                <label htmlFor="password">Password:</label>
                <LetmyIn type='password' name='password' value={userData.password} onChange={handlerInputChange}/>   
                {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
                <ButtonLog type='submit'>Login</ButtonLog>         
    </Patata>
    )
}
export default Form