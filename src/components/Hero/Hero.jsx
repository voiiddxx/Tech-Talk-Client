import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero-main'>
       <div className="hero-left">
    <h3>All Converseation</h3>
    <hr  className='bor'/>

    <div className="card">
        <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="profile" />
        <div className="card-text">
            <h2>shanayaa</h2>
            <p>Hey i am waiting about </p>
        </div>
    </div>
    <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQkD6r5PgyD07ELa36Qm33O68hk9y05lj8WWe-PHKBMxNeD2dllgg3eSIHQHu8-ImAp8&usqp=CAU" alt="profile" />
        <div className="card-text">
            <h2>shanayaa</h2>
            <p>Hey i am waiting about </p>
        </div>
    </div>
    <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQkD6r5PgyD07ELa36Qm33O68hk9y05lj8WWe-PHKBMxNeD2dllgg3eSIHQHu8-ImAp8&usqp=CAU" alt="profile" />
        <div className="card-text">
            <h2>shanayaa</h2>
            <p>Hey i am waiting about </p>
        </div>
    </div>
    <div className="card">
        <img src="https://img.freepik.com/free-photo/close-up-portrait-attractive-young-woman-isolated_273609-35667.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701734400&semt=ais" alt="profile" />
        <div className="card-text">
            <h2>shanayaa</h2>
            <p>Hey i am waiting about </p>
        </div>
    </div>
    <div className="card">
        <img src="https://img.freepik.com/free-photo/close-up-portrait-attractive-young-woman-isolated_273609-35667.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701734400&semt=ais" alt="profile" />
        <div className="card-text">
            <h2>shanayaa</h2>
            <p>Hey i am waiting about </p>
        </div>
    </div>
       </div>
       <div className="hero-mid">
        <div className="upper"></div>
        <div className="mid"></div>
        <div className="bottom">
            <input type="text" placeholder='Type something' />
            <div className="chat-button">
                <p>Send</p>
            </div>
        </div>
       </div>
       <div className="hero-right"></div>
      
    </div>
  )
}

export default Hero
