import React from 'react'
import './Offers.css'
import image_gym2 from '../Assets/image_gym2.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>CALCULATE BMI</h1>
            <h1>Offers For You</h1>
            <p>Measure your BMI at CITIGYM to assess your level of fat thinness or ideal weight <br/>
            We support members to measure their BMI before and during exercise 
            so that members can track their exercise results <br/> 
            BMI is the Body Mass Index, used by doctors and health professionals to determine whether a person is obese <br/>
            overweight or too thin. Leave your information so that we can help you analyze your health and give advice suitable for your physical condition.</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={image_gym2} alt=''/>
        </div>
    </div>
  )
}

export default Offers