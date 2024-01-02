import React, { useEffect } from 'react'
import "./Splash.css"
import { useNavigate } from 'react-router'

const Splash = () => {
    const navigate = useNavigate();
    const ChangeScreen = ()=>{

        const token = localStorage.getItem('x-auth-token');
        if(token){
            setTimeout(() => {
                navigate("/Home")
            }, 2000);
        }
        else{
            setTimeout(() => {
                navigate("/create")
            }, 2000);
        }
        
    }
useEffect(()=>{
    ChangeScreen();
} , [])
   
  return (
    <div className="splash">
        <h1>Welcome to the Tech-Talk</h1>
    </div>
  )
}

export default Splash
