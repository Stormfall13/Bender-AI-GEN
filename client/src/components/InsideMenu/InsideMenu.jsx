import React from 'react'
import './insideMenu.css'
import burger from '../../img/burger.svg'
import search from '../../img/search.svg'
import user from '../../img/user.svg'
import bucket from '../../img/bucket.svg'

const InsideMenu = () => {
  return (
    <section className='inside'>
        <div className="inside__panel">
            <div className="inside__panel-img">
                <img src={burger} alt="" />
            </div>
        </div>
        <div className="inside__search">
            <div className="inside__search-icon">
                <img src={search} alt="" />
            </div>
        </div>
        <div className="inside__magazine-btn">
            <div className="inside__user">
                <img src={user} alt="" />
            </div>
            <div className="inside__bucket">
                <img src={bucket} alt="" />
            </div>
        </div>
    </section>
  )
}

export default InsideMenu;
