import React, { useState } from 'react'
import {useNavigate, userNavigate} from 'react-router'
import {useDispatch} from 'react-redux'
import axios from "axios"
import { loginUser } from '../store/slices/UserSlice'
const Login = () => {
  const dispatch = useDispatch();
  const [username, setusername] = useState(null)
  const [password, setpassword] = useState(null);
    const navigate = useNavigate();

    const LoginUsernow = async()=>{
      if(username==null && password==null){
        alert("no username password available");
      }
      else{
        const bodyParameter = {
          'username':username,
          'password':password
        };
         try {
          const response = await axios.post("http://localhost:3091/login" , bodyParameter);
          console.log(response.data);
          const token = localStorage.setItem('x-auth-token' , response.data.token);
          dispatch(loginUser(response.data));
          navigate("/Home")
        } catch (error) {
          console.log(error);
        }
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
     
        <p className='password'>Your Password</p>
       <input onChange={(e)=>{
        setpassword(e.target.value)
       }} type="password" placeholder='********' />

       <div onClick={()=>{
        LoginUsernow();
       }} className="button">
        <h2>Login Now</h2>
       </div>

       <h3>Don't Have an account? <span onClick={()=>{
        navigate("/Create")
       }} >Create Now</span></h3>
       </form>
    </div>
   </div>
    </>
  )
}

export default Login
