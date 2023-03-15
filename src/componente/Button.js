import React from "react";
import '../hoja-de-estilo/Button.css'

function Button({action,dato}){
    return(
        <div className="calculadora-Button" onClick={() => {action(dato)}}>
            {dato}
        </div>

    )
}

export default Button;