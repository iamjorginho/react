import React, { useState } from 'react'
import {MultipleCustomHook} from '../03-examples/MultipleCustomHook'


export const RealExampleRef = () => {

const [show, setShow] = useState(false)

  return (
    <>
    <h1>RealExampleRef</h1>
    <hr/>

    


   {show && <MultipleCustomHook />}

   <button className='btn btn-primary' onClick={ () => {
    setShow (!show)
   }}>Mostrar/Ocultar</button>

    
    </>
  )
}
