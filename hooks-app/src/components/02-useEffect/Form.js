import React, { useEffect, useState } from 'react'
import { Message } from './Message'


export const Form = () => {

    const [formState, setFormState] = useState({
        name: '',
        email:''
    })

    const { name, email } = formState

    useEffect( () => {
        //console.log('hello')

    },[])

    useEffect( () => {
       // console.log('FormState change')

    },[formState])

    useEffect( () => {
        console.log('email cambio')

    },[email])



    const haddleChangeInput = ({target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })

    }
    
  return (
    <>
    <h1>useEffect - Form </h1>
    <hr/>
    
    <div className='form-group w-50 p-3'>
        <input type='text'
        placeholder='Your name'
        name='name'
        className='form-control'
        autoComplete='off'
        value={name}
        onChange={haddleChangeInput}
        />
        
    </div>

    <div className='form-group w-50 p-3'>
        <input type='email'
        placeholder='example@email.com'
        name='email'
        className='form-control'
        autoComplete='off'
        value={email}
        onChange={haddleChangeInput}
        />
        

    </div>
    { (name == '1234') && <Message/> }

    </>
  )
}
