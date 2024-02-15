import React from 'react'
import { useState } from "react";
import axios  from 'axios';

const Verify_otp = () => {
  const [otp, setOtp] = useState(""); 

  const handleVerification = async (event) => {
      event.preventDefault();

      const URL = "http://localhost:8080/verify-otp";
      const body = {
          email:sessionStorage.getItem("Email"), 
          otp:otp
      };
      const header = {
          headers: {
              "Content-Type": "application/json",
          }
      };

      try {
          const response = await axios.post(URL, body, header);
          console.log(response);
          console.log("done")
      } catch (error) {
          console.log(error);
      }
  };
  return (
    <div>
      <section className='bg-white flex items-center justify-center h-screen'>
        <article className='bg-slate-300 p-8 rounded shadow-md w-96'>
        <h1 className='text-2xl font-semibold mb-4 text-black'>Plese Enter The OTP</h1>
        <div className='text-2xl font-semibold mb-4'>
        <label className="block text-white font-semibold"></label>
        <input type="text" placeholder=' OTP' onChange={(event)=>setOtp(event.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"/> <br />
        <button onClick={handleVerification} className='bg-blue-600 text-white w-full py-0 font-semibold hover:bg-blue-900 focus:outline-none focus:bg-blue-600'>Verify</button>
        </div>
        </article>
    </section>
    </div>
  )
}

export default Verify_otp
