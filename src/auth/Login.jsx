import React from 'react'
import {useNavigate, userNavigate} from 'react-router'

const Login = () => {
    const navigate = useNavigate();
  return (
    <>
     <div className="create-main">
    <div className="register-card">
        <h1>Create Your Account</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur ratione aut? Itaque, voluptas corrupti.</p>
        <br />
       
       <form>
        <p className='title'>username</p>
       <input type="text" placeholder='Username' />
       <br />
     
        <p className='password'>Your Password</p>
       <input type="password" placeholder='********' />

       <div className="button">
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
