import React, { useState } from 'react'
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = ({role}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate=useNavigate();

    // console.log(role)
    
    const handleRegistration = async (event) => {
        event.preventDefault();

    const URL = "http://localhost:8080/register";
    const body = {
        email:email,
        password:password,
        userRole: role,
     }
     const header = {
        headers:{
            "Content-Type":"application/json",
        },
        withCredentials : true
     }

     try{
        const response = await axios.post(URL,body,header);
        console.log(response)
        sessionStorage.setItem("Email",email)
        sessionStorage.setItem("Password",password)
        if(response.status===202){
        navigate("/verify-otp")
        }
        
     }catch(error){
        console.log(error)
     }
    }
      
return(
    <section className='bg-slate-200 flex items-center justify-center h-screen'>
        <article className='bg-white p-8 rounded shadow-md w-96 text-black'>
            <h1 className='text-2xl font-semibold mb-4'>Sign in To Your Account</h1>
            <div className='text-2xl font-semibold mb-4'>
            <label className="block text-black font-semibold">Email</label>
            <input type="email" placeholder='  Enter Email Id' onChange={(event)=>setEmail(event.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"/> <br />
            <label className="block text-black font-semibold">Password</label>
            <input type="password" placeholder='  Password' onChange={(event)=>setPassword(event.target.value)} className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'/> <br />
            <button type='submit' onClick={handleRegistration} className='bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>Request OTP</button>
            </div>
        </article>
    </section>
)
}
export default Register
