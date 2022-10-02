import React from 'react'
import none from '../components/assets/none.svg'

const Banner = () => {
  return (
    <div class="banner">
        <div className='paragraph'>
            <h5 className='summer'>SUMMER 2020</h5>
            <h5 className='new'>NEW COLLECTION</h5>
            <p className='we'>We know how large objects will act, 
            but things on a small scale.</p>
            <button class="btn btn-primary">SHOP NOW</button>
        </div>
        <img src={none}></img>
    </div>
  )
}

export default Banner