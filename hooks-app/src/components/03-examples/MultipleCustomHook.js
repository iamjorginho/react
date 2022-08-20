import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Swal from 'sweetalert2'

export const MultipleCustomHook = () => {
  //const {counter, increment, decrement} = useCounter(1)
  const [counter, setCounter] = useState(1)


  const { loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  //console.log(loading);
  //console.log(data)

  const {author,quote} = !!data && data[0]
  //console.log(author,quote)

//   if(data != null){
//     console.log(data[0])
//   }

const increment = () => {
  setCounter(counter + 1)
}

const decrement = () => {
  if (counter <= 1) {
    return Swal.fire({
      title: 'No hay más frases para mostrar',
      width: 600,
      padding: '3em',
     
    })
  }
  setCounter(counter - 1)
  
}
  return (
    <>
      <h1>The Breaking Bad API</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info ">Loading...</div>
      ) : (
        <div className="blockquote text-right" >
          <p>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
          <button className="btn btn-primary" onClick={increment}>Siguiente frase</button>
          <button className="btn btn-primary mx-3" onClick={decrement}>Regresar frase</button>
        </div>
      )}
      
    </>
  );
};
