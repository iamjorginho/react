import React, { useEffect } from 'react'


export const Message = () => {

    useEffect(() => {
      console.log('componente activado')
    
      return () => {
        console.log('componente desactivado')
      }
    }, [])
    


  return (
    <>
    <h3>Se Cambio</h3>
    </>
  )
}
