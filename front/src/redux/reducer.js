import  {ADD_FAV, DELETE_FAV, ORDER, FILTER} from './action-types';
const initialState={myFavorites:[], allCharacters:[]};

const reducer = (state=initialState, actions) =>{
    switch(actions.type){
    case ADD_FAV:
        return {...state, myFavorites: [...state.allCharacters, actions.payload],
        allCharacters: [...state.allCharacters, actions.payload]}
    case DELETE_FAV:
        return {
            ...state,
            myFavorites: state.myFavorites.filter(char=> char.id !== actions.payload)
        }
        case FILTER:
            const {allCharacters} = state;
            const filtrado = allCharacters.filter(persona=> persona.gender === actions.payload)
            return{...state, myFavorites: filtrado}
        case ORDER:
            let decide;
            if('Ascendente')   decide = allCharacters.sort((a, b)=>  a-b);
            if('Descendente') decide = allCharacters.sort((a,b)=> b-a);
            return{...state, myFavorites: decide}
    default:
        return {...state}
    }}
    export default reducer;