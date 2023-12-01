import React, { useState } from 'react';
import './editor.css';
import gptIcon from '../../img/editor-icon/gpt.svg';
import refresh from '../../img/editor-icon/refresh.svg';
import zoom from '../../img/editor-icon/zoom.svg';
import close from '../../img/editor-icon/close.svg';
import panel from '../../img/eckditor-panel-icon/panel.png';


import GptEditor from '../GptEditor/GptEditor'

const Editor = ({ isBlockVisible, setIsBlockVisible, hideBlock }) => {

    const [ isGptVisible, setIsGptVisible ] = useState(false);

    const showGpt = () => {
        setIsGptVisible(true);
      };
    
      const hidenGpt = () => {
        setIsGptVisible(false);
      };

    return (
        <div 
            className='editor'
            style={{ display: isBlockVisible ? 'flex' : '' }}
        >
            <GptEditor 
                isGptVisible={isGptVisible} 
                setIsGptVisible={setIsGptVisible}
                hidenGpt={hidenGpt}
            />
            <div className="editor__wrapp">
                <div className="editor__head">
                    <div className="editor__text-wrapp">
                        <div className="editor__desc">Редактирование /</div>
                        <div className="editor__title">Текст</div>
                    </div>
                    <div className="editor__wrapper">
                        <div 
                        className="btn__gpt"
                        onClick={showGpt}
                        >
                            Открыть генератор текста
                            <div className="gpt__icon">
                                <img src={gptIcon} alt="" />
                            </div>
                        </div> 
                        <div className="editor__tools">
                            <div className="refresh">
                                <img src={refresh} alt="" />
                            </div>
                            <div className="zoom">
                                <img src={zoom} alt="" />
                            </div>
                            <div 
                                className="close"
                                onClick={hideBlock}
                            >
                                <img src={close} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* ############# EDITOR ############ */}
                <div className="eckditor">
                    <div className="eckditor__title">Текст html</div>
                    <div className="eckditor__main">
                        <div className="eckditor__panel">
                            <img src={panel} alt="" />
                        </div>
                        <textarea className='eckditor__textarea'></textarea>
                    </div>
                </div>
                <div className="button__wrapp">
                    <div className="button__wrapp-submit">
                        Сохранить и закрыть
                    </div>
                    <div className="button__wrapp-save">
                        Сохранить - Ctrl+S
                    </div>
                    <div className="button__wrapp-esc">
                        Отмена - Esc
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor;
