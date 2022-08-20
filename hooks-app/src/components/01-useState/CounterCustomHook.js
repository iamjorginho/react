import React from 'react'
import { useCounter } from '../../hooks/useCounter';

export const CounterCustomHook = () => {

    const {counter, increment, decrement, borrar} = useCounter(); //destructurar useCounter

  return (
    <>
      <h1>Counter Custom Hook</h1>
      <h2>Score: {counter}</h2>

      <hr/>

      <button onClick={increment} className='btn btn-danger px-4'>+ 1</button>
      <button onClick={borrar} className='btn btn-danger px-4 mx-2'>Reset</button>
      <button onClick={decrement} className='btn btn-danger px-4' >- 1</button>
    </>
  )
}
