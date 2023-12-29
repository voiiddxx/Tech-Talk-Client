import React from 'react'
import "./Create.css"

const Create = () => {
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
        <p className='title'>Email address</p>
       <input type="text" placeholder='Username' />
       <br />
        <p className='title'>Your Password</p>
       <input type="text" placeholder='Username' />

       <div className="button">
        <h2>Create Now</h2>
       </div>

       <h3>Already have an account? <span>Login Now</span></h3>
       </form>
    </div>
   </div>
   </>
  )
}

export default Create
