 import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import {ORDER, FILTER} from'../../redux/action-types'
import { orderCards, filterCards } from '../../redux/actions';
import { useDispatch } from 'react-redux';
 const Favorites=()=>{
    const {myFavorites} = useSelector(state=> state);
const dispatch = useDispatch();
    function ordenar(event){
        event.preventDefault();
        const val = event.target.value;
dispatch(orderCards(val));
    }

const filtrar = (event)=>{
    event.preventDefault();
    let valy = event.target.value;
    dispatch(filterCards(valy))
}
    return(
        <div>
            {
                myFavorites.map(char=>{
                    return(
                        <div>
                            <button key={char.id}>X</button>
                            <Link to={`/detail/${char.id}`}>
                            <h2 className='cafe'>{char.name}</h2>
                            </Link>
                        
                        <h2>{char.species}</h2>
                        <h2>{char.gender}</h2>
                        <img  src={char.image} alt="No pos... No lo sé Rick, parece falso" /> 
                     </div>
                    )
                })
            }
            <div><select name={ORDER} onChange={ordenar}>
                <option value='Ascendente'>
                    Ascendente
            </option>
            <option value='Descendente'> Descendente
                </option></select>
                <select name={FILTER} onChange={filtrar}>
                    <option value = 'Male'>Male</option>
                    <option value='Female'> Female </option>
                    <option value='Genderless'> Genderless</option>
                    <option value ='unknown'> Unown?</option>
                    </select></div>
        </div>
    )
 }
 export default Favorites
