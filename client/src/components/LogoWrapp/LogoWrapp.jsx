import React from 'react'
import './logoWrapp.css'
import logo from '../../img/logo.png'

const LogoWrapp = () => {
  return (
    <div className="logo">
        <div className="logo__items">
            <div className="logo__wrapp">
            <img src={logo} alt="" />
            </div>
            <div className="logo__text">
                <div className="site__name"></div>
                <div className="description"></div>  
            </div>
        </div>
        <div className="logo__item"></div>
    </div> 
  )
}

export default LogoWrapp
