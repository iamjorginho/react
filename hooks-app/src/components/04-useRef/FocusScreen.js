import React, { useRef } from 'react'


export const FocusScreen = () => {
    const inputRef = useRef();

    const haddleFocus = () => {
        inputRef.current.focus();

    }

  return (
    <>
    <h1>Focus Screen</h1>

    <input  className='form-control' type='text' placeholder='name' ref={inputRef}/>
    <button className='btn btn-primary mt-3' onClick={haddleFocus}>Focus</button>
    
    
    </>
  )

}
