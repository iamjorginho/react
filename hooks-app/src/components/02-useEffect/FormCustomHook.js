import React from 'react'
import { useForm } from '../../hooks/useForm'


export const FormCustomHook = () => {

    const [formValues, haddleChangeInput] = useForm({
        name: '',
        email:'',
        password: ''
    })

    const { name, email, password } = formValues

    const hadleSubmit = (e) =>{
        e.preventDefault()

        console.log(formValues)

    }



  return (
    
    <form onSubmit={hadleSubmit}>
    <h1>FormCustomHook - Form </h1>
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

    <div className='form-group w-50 p-3'>
        <input type='password'
        placeholder='*******'
        name='password'
        className='form-control'
        autoComplete='off'
        value={password}
        onChange={haddleChangeInput}
        />
        

    </div>
    
    <button  className='btn btn-success px-10 mx-3' >Submit</button>
    </form>
    
    
   


  )
  
}
