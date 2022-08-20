import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'


export const Memorize = () => {

    const [show, setShow] = useState(true)

    const {counter, increment} = useCounter(10)

  return (
    <>
    <h1>Memorize: <Small value={counter}/></h1>
    <hr/>
    

    <button className='btn btn-primary' onClick={increment}>
        +1
    </button>

    <button className='btn btn-secondary mx-3' onClick={() => (
        setShow(!show)
    )}>
    Show/Hidden {JSON.stringify(show)}
    </button>

    </>
  )
}
