import React, { useState } from "react";

const CounterApp = () => {

    const [state, SetState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const {counter1, counter2, counter3} = state;

    const aumentarNumero = () => {
        return SetState({
            ...state,
            counter1: counter1 + 1
            
        })
    }

    const disminuirNumero = () =>{
      return SetState({
      
        ...state,
        counter1: counter1 - 1,
 
    }) 
    }

  return (
    <>
      <div>
        <h1>CounterApp</h1>
        <hr/>

        <h2>Score 1: {counter1}</h2>
        <h2>Score 2: {counter2}</h2>
        <h2>Score 3: {counter3}</h2>

        <button onClick={aumentarNumero} className="btn btn-primary">Aumentar +1</button>
        <button onClick={disminuirNumero} className="btn btn-primary mx-2">Disminuir -1</button>
      </div>
    </>
  );
};

export default CounterApp;
