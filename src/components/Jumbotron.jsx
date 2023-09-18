import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg';
import HoldingIphone from "../assets/images/iphone-hand.png"

function Jumbotron() {

    const handleLearnMore = () =>{
        const element = document.querySelector(".sound-section");

        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth',


        })
    }


  return (
    <div className='jumbotron-section wrapper'>
        <h2 className="title">New</h2>
        <img src={Iphone} alt='iPhone 14 pro' className='logo' ></img>
        <p className="text">Big and bigger</p>
        <span className="description">
            From $41.65/mo. for 24 mo. ir $889 before trad-in 
        </span>

        <ul className='links'>
            <li>
                <button className="button">
                    Buy
                </button>
            </li>
            <li>
                <a className='link' onClick={handleLearnMore}>Learn more</a>
            </li>
        </ul>
        <img className='iphone-img' src={HoldingIphone} alt='iphone in hand' />
    </div>
  )
}

export default Jumbotron