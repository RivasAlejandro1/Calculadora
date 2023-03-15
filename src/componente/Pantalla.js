import React from 'react';
import '../hoja-de-estilo/Pantalla.css'

function Pantalla ({input}){
    return(
        <div className='calculadora-pantalla'>
            {input}
        </div>
)
}

export default Pantalla;