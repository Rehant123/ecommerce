import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { useState } from 'react';
import MyContext from '../../Contexts/myContext';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { fireDB } from "../../Firebase/Firebaseconfig"
import { collection, Timestamp} from 'firebase/firestore';

import {toast} from "react-toastify"
import { addDoc } from 'firebase/firestore';
const auth = getAuth();

function Signup() {
  
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
const context = useContext(MyContext);
const {loading,setLoading} = context;

const signup = async(e)=>{
e.preventDefault();
  setLoading(true);
 if(name == ""||email ==""||password==""){
  return toast.error("All fields required")
 }
 try{
  const users = await createUserWithEmailAndPassword(auth,email,password);
  console.log(users)
  const user = {
    name:name,
    uid:users.user.uid,
    email:users.user.email,
    time:Timestamp.now()
  }
  const userRef  = collection(fireDB,"user");
  await addDoc(userRef,user);
  setName("");
  setEmail("")
  setPassword("");
  toast.success("SignUp Success! You can now LOGIN");
  setLoading(false);
  
 }catch(error){
  toast.error("signup failed");
  console.log(error);
  setLoading(false);
 }
}
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="bg-slate-900 rounded-xl p-8  shadow-md w-full sm:w-96">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">Signup</h2>
            <form onSubmit = {signup}>
            <div className="mb-4">
            
            <input value = {name} onChange = {(e)=>setName(e.target.value)} type="text" placeholder = "Name"  id="name" name="name" className="font-semibold mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" required />
          </div>
              <div className="mb-4">
            
                <input  value = {email} onChange = {(e)=>setEmail(e.target.value)} type="text" placeholder = "Email"  id="email" name="email" className="font-semibold mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" required />
              </div>
              <div className="mb-4">
           
                <input  value = {password}onChange = {(e)=>setPassword(e.target.value)}type="password"placeholder = "Password" id="password" name="password" className="font-semibold mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" required />
              </div>
              <button type="submit" className="bg-yellow-500 font-semibold text-black p-2 rounded-md w-full">Signup</button>
              <p className='font-semibold text-white mt-4 '>  Already Have An Account{' '}   <Link className='text-yellow-500' to = {"/login"}>Login</Link></p>
             
            </form>
          </div>
        </div>
      );    
}

export default Signup;