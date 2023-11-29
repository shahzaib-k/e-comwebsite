import React from 'react'
import './hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'




function Hero() {
  return (
    <>

    <div className='hero'>
      
    <div className='hero-left' > 
    

    <div>
    
      <div className='hero-hand-icon' >
        <div>New <img src={hand_icon} /> </div>
        <div>collection</div>
        <div>for everyone</div>

      </div>
      </div>
      

    <div className='hero-latest-btn'>
      <div>Latest Collection</div>
      <img src={arrow_icon} alt='image' />
    

    </div>

    </div>

    <div className='hero-right' >

    <img src={hero_image} alt='image' ></img>

    </div>


    </div>
    </>
  )
}

export default Hero
