import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className='flex items-center'>
      <div className=" gap-4 mx-auto flex max-w-96 flex-col items-center w-full">
        <h1 className='text-3xl font-bold'>Faça seu login</h1>

        <form className=' flex gap-2 flex-col w-full'>
          <input type="email" className='w-full rounded-full border border-gray-300 px-4 py-2' placeholder='Digite seu e-mail' />
          
          <input type="password" className='w-full rounded-full border border-gray-300 px-4 py-2' placeholder='Digite sua senha' />
          
          <button className='w-full rounded-full bg-primary-400 font-bold cursor-pointer border border-gray-300 px-4 py-2 text-white'>Login</button>
        </form>

          <p>Ainda não tem conta? {" "}
            <Link to='/register' className='underline font-semibold'>Registre-se aqui!</Link></p>
        
      </div> 
    </section>
  )
}

export default Login;
