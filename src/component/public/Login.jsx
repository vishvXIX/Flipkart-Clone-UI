// import React from 'react'

const Login = () => {

  const respond = (event) => {
    event.preventDefault();
}

  return (
    <section className='bg-white flex items-center justify-center h-screen'>
    <article className='bg-slate-500 p-8 rounded shadow-md w-96 text-white'>
    <h1 className='text-2xl font-semibold mb-4 flex items-center justify-center '>Login</h1>
    <div className='text-2xl font-semibold mb-4'>
    <label className="block text-white font-semibold">Email</label>
    <input type="email" placeholder='  Enter your Email' className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"/> <br />
    <label className="block text-white font-semibold">Password</label>
    <input type="password" placeholder='  Password' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'/> <br />
    <button onClick={respond} className='bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>Submit</button>
    </div>
    </article>
</section>
  )
}

export default Login
