import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/ProcesoPesado'



export const MemoHook = () => {
    const [counter, setCounter] = useState(100)
    const [show, setShow] = useState(true)

    const increment = () => {
        return setCounter(counter + 1)
    }

    const view = () => {
        setShow(!show)

    }

    const MemoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <>
    <h1>Bievenido</h1>
    <hr/>
    <h3>Valor: {counter}</h3>

    <p>{MemoProcesoPesado}</p>

    <button onClick={increment} className="btn btn-primary ">+1</button>
    <button onClick={view} className="btn btn-primary mx-2">View/Show {JSON.stringify(show)}</button>
    




    </>
  )
}
