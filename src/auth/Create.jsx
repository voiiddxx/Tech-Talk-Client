import React, { useState } from 'react'
import "./Create.css"
import {useNavigate} from 'react-router'
import {useDispatch , useSelector} from "react-redux"
import axios from "axios"
import { registerUser } from '../store/slices/UserSlice' 

const Create = () => {

  const data =  useSelector((state)=>{
    return state.user;
  })
  console.log("this is data" , data);
  const dispatch = useDispatch();

  const [username, setusername] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);

  const navigate = useNavigate();

  const createuser = async()=>{
    try {
      if(username==null && email==null && password==null){
        alert("please enter all field")
      }
      else{
        console.log(username , email , password);
      const bodyparameter = {
        'username':username,
        'email':email,
        'password':password
      };
      const response = await axios.post("http://localhost:3091/register" ,bodyparameter);
      console.log(response.data);
 
      navigate("/login");
      
      
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
   <>
   <div className="create-main">
    <div className="register-card">
        <h1>Create Your Account</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur ratione aut? Itaque, voluptas corrupti.</p>
        <br />
       
       <form>
        <p className='title'>username</p>
       <input onChange={(e)=>{
        setusername(e.target.value)
       }} type="text" placeholder='Username' />
       <br />
        <p className='title'>Email address</p>
       <input onChange={(e)=>{
        setemail(e.target.value)
       }} type="email" placeholder='jack123@gmail.com' />
       <br />
        <p className='password'>Your Password</p>
       <input onChange={(e)=>{
        setpassword(e.target.value)
       }} type="password" placeholder='********' />

       <div onClick={()=>{
        createuser();
       }} className="button">
        <h2>Create Now</h2>
       </div>

       <h3>Already have an account? <span onClick={()=>{
        navigate("/Login")
       }} >Login Now</span></h3>
       </form>
    </div>
   </div>
   </>
  )
}

export default Create
