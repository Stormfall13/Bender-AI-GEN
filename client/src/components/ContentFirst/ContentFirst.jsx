import React, { useState } from 'react';
import './contentFirst.css';
// ########################
import first from '../../img/first.png';
import add from '../../img/add.svg';
import pen from '../../img/pen.svg';
import setting from '../../img/setting.svg';
import up from '../../img/up.svg';
import down from '../../img/down.svg';
import trash from '../../img/trash.svg';
import dots from '../../img/dots.svg';
// ########################
import Editor from '../Editor/Editor';



const ContentFirst = () => {
  
  const [ hover, setHover ] = useState(false);
  const [isBlockVisible, setIsBlockVisible] = useState(false);

  
  const defaultStyle = {
    border: ''
  }
  const hoverStyle = {
    border: '2px solid #36c55c'
  }
  function handleMouseEnter() {
    setHover(true);
  }
  function handleMouseLeave() {
    setHover(false);
  }
  const buttonStyle = hover ? { ...defaultStyle, ...hoverStyle } : defaultStyle; 
  
  const showBlock = () => {
    setIsBlockVisible(true);
  };
  
  const hideBlock = () => {
    setIsBlockVisible(false);
  };

  
  return (
    <section 
      className='first'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={buttonStyle} 
    >
      <Editor isBlockVisible={isBlockVisible} setIsBlockVisible={setIsBlockVisible} hideBlock={hideBlock} />
        <div className="icon__add">
          <img src={add} alt="" />
        </div>
        <div className="settings__panel">
          <div className="read__setting">
            <div 
              className="read__wrapp"
              onClick={showBlock}
            >
              <div className="read__img">
                <img src={pen} alt="" />
              </div>
              <div className="read__text">Наполнение</div>
            </div>
            <div className="setting">
              <img src={setting} alt="" />
            </div>
          </div>
          <div className="up__down">
            <div className="up">
              <img src={up} alt="" />
            </div>
            <div className="down">
              <img src={down} alt="" />
            </div>
          </div>
          <div className="trash">
            <img src={trash} alt="" />
          </div>
          <div className="dots">
            <img src={dots} alt="" />
          </div>
        </div>
        <div className="first__img">
            <img src={first} alt="" />
        </div>
        <div className="wrapp__first">
            <div className="first__title"></div>
            <div className="first__text"></div> 
        </div>
    </section>
  )
}

export default ContentFirst;