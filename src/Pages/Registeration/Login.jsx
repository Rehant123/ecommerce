import React from 'react'
import {Link} from "react-router-dom"
function Login() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="bg-slate-900 rounded-xl p-8  shadow-md w-full sm:w-96">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">Login</h2>
            <form>
              <div className="mb-4">
            
                <input type="text" placeholder = "Email"  id="email" name="email" className="font-semibold mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" required />
              </div>
              <div className="mb-4">
           
                <input type="password"placeholder = "Password" id="password" name="password" className="font-semibold mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" required />
              </div>
              <button type="submit" className="bg-yellow-500 font-semibold text-black p-2 rounded-md w-full">Login</button>
              <p className='font-semibold text-white mt-4 '>  Don't Have An account{' '}   <Link className='text-yellow-500' to = {"/signup"}>Signup</Link></p>
             
            </form>
          </div>
        </div>
      );    
}

export default Login