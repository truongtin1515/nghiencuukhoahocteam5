import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import gym_hero from '../Assets/gym_hero-removebg-preview.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>GYM FOR HEALTH</h2>
        <div>
        <div className='hand-hand-icon'>
            <p>Gym</p>
            <img src={hand_icon} alt=""/>
        </div>
        <p>Collection</p>
        <p>For Everyone</p>
        </div>
        <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt=""/>
        </div>
        </div>
        <div className='hero-right'>
            <img src={gym_hero} alt="" />
        </div>
    </div>
  )
}

export default Hero