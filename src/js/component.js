
import '../css/componente.css';


export const saludar = (nombre) => {

    console.log('Creando h1, en el body '); 

    const h1  = document.createElement('h1'); 
    h1.innerText = `Hola nube, ${nombre}`; 

    document.body.append(h1);

}