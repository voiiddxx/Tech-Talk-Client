import React from 'react'
import "./Home.css"
import Nav from '../components/Nav/Nav'
import Hero from '../components/Hero/Hero'
import {useSelector} from "react-redux"
const Home = () => {

  const data = useSelector((state)=>{
    return state.user;
  });

  console.log("this is login user" , data);
  return (
   <>
   <Nav/>
   <Hero/>
   </>
  )
}

export default Home
