
function validation(userData){
    let err ={};
    if(!/\S+@\S+\.\S+/.test(userData.username)) err.username='Coloca tu email'
    if(!userData.username) err.username='No lo dejes vacío como tu repo'
    if(userData.username.length > 35) err.username='Que no supere tampoco los 35 caracteres!'

    if(!userData.password.match(/\d/))err.password='Mínimo un número please...'
    if(userData.password.length < 6 || userData.password.length > 10)err.password='La clave debe ser entre 6 y 10 caracteres, baboso';
    return err;
}
export default validation