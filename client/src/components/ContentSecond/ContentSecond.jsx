import React from 'react'
import './contentSecond.css'
import first from '../../img/first.png'

const ContentSecond = () => {
  return (
    <section className='second'>
        <div className="second__text"></div>
        <div className="second__img">
            <img src={first} alt="" />
        </div>
    </section>
  )
}

export default ContentSecond
