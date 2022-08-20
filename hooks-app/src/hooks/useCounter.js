import { useState } from "react"


export const useCounter = (value = 5) => {
   const [counter, setCounter] = useState(value) // declaracion del estado

   const increment = () => {
    return setCounter(counter + 1)

   } // aumentar

   const decrement = () => {
    if (counter < 1) {
        setCounter(0)
        return 
    }
    return setCounter(counter - 1)
   } // disminuir y si es menor a 1 devuelve 0  


   const borrar = () =>{
    setCounter(value)
}

   return {
    counter,
    increment,
    borrar,
    decrement
   }
}
