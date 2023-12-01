import React from 'react'
import './banner.css'
import banner from '../../img/banner.png'

const Banner = () => {
  return (
    <section className='banner'>
        <div className="banner__img">
            <img src={banner} alt="" />
        </div>
        <div className="banner__title"></div>
        <div className="banner__text"></div>
    </section>
  )
}

export default Banner
