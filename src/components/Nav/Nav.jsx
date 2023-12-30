import React from 'react'
import "./Nav.css"
const Nav = () => {
  return (
    <div className="nav">
        <div className="nav-left">
            <h1>Tech-Talk</h1>
        </div>
        <div className="nav-mid">
            <p>Chat</p>
            <p>Home</p>
            <p>News</p>
            <p>Feed</p>
        </div>
        <div className="nav-right">
        <div className="logout">
        <p>Logout</p>
        </div>
            <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="image-tag" />
         
        </div>
    </div>
  )
}

export default Nav
