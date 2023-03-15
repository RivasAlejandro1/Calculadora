import React, {useState} from 'react';
import './App.css';
import Pantalla from './componente/Pantalla';
import Button from './componente/Button';
import Reset from './componente/Reset';
import {evaluate} from 'mathjs';

function App() {

  const [input,setInput] = useState("");

  const agregarValor = (valor)=>{
    setInput( input + valor);
  }
  
  

  const resetearValor = (valor)=>{
    setInput( "");
  }

  const evaluar =()=>{
    setInput( evaluate(input));;
  }
  return (
    <div className="App">
      <div className='AppCalculadora'>
        <Pantalla 
          input={input}
        />
        <div className='lineButton lineButton1'>
          <Button
            action={agregarValor}
            dato={1}
          />
          <Button
            action={agregarValor}
            dato={2}
          />
          <Button
            action={agregarValor}
            dato={3}
          />
          <Button
            action={agregarValor}
            dato={"+"}
          />
        </div>
        <div className='lineButton lineButton1'>
          <Button
            action={agregarValor}
            dato={4}
          />
          <Button
            action={agregarValor}
            dato={5}
          />
          <Button
            action={agregarValor}
            dato={6}
          />
          <Button
            action={agregarValor}
            dato={"-"}
          />
        </div>
        <div className='lineButton lineButton1'>
          <Button
            action={agregarValor}
            dato={7}
          />
          <Button
            action={agregarValor}
            dato={8}
          />
          <Button
            action={agregarValor}
            dato={9}
          />
          <Button
            action={agregarValor}
            dato={"/"}
          />
        </div>
        <div className='lineButton lineButton1'>
          <Button
            action={agregarValor}
            dato={"*"}
          />
          <Button
            action={agregarValor}
            dato={0}
          />
          <Button
            action={agregarValor}
            dato={"."}
          />
          <Button
            action={evaluar}
            dato={"="}
          />
        </div>
        <div className='lineButton lineButton5'>
          <Reset
          action={resetearValor}/>
        </div>

        
      </div>
    </div>
  );
}

export default App;
