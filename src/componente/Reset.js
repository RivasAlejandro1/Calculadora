import React from 'react';
import '../hoja-de-estilo/Reset.css'

function Pantalla (props){
    return(
        <div className='calculadora-reset' onClick={props.action}>
            Reset
        </div>
)
}

export default Pantalla;