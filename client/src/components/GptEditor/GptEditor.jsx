import React, { useState } from 'react';
import axios from 'axios';
import './gpteditor.css';
import close from '../../img/editor-icon/close.svg';
import GptWindowText from './GptWindowText';

const GptEditor = ({ isGptVisible, setIsGptVisible, hidenGpt  }) => {

    // http://localhost:5000/chatGPT

    const [formData, setFormData] = useState({
        username: '',
        summary: '',
        textStyle: '',
        textLength: '',
    });


    const [serverResponse, setServerResponse] = useState('Жду заполнения полей...');
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const dataToSend = {
            context: formData.username,
            message: formData.summary
        };
        axios.post('http://localhost:5000/chatGPT', dataToSend)
            .then((response) => {
                setServerResponse(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                setServerResponse('Ошибка при получении ответа от сервера.');
                console.error('Ошибка при отправлении данных: ', error);
            });
    };

    return (
        <div 
            className='gpt__editor'
            style={{ display: isGptVisible ? 'flex' : '' }}
        >
            <div className="gpt__editor-wrapp">
                <div className="gpt__editor-head">
                    <div className="gpt__editor-text">
                        <div className="gpt__editor-desc">Использование GPT /</div>
                        <div className="gpt__editor-title">Краткое содержание</div>
                    </div>
                    <div className="gpt__editor-items">
                        <div className="gpt__editor-activited">
                            <div className="gpt__editor-activebar">Краткое содержание</div>
                            <div className="gpt__editor-activebar">Параграфы</div>
                            <div className="gpt__editor-activebar">Готовый текст</div> 
                        </div>
                        <div 
                            className="gpt__editor-close"
                            onClick={hidenGpt}
                        >
                            <img src={close} alt="" />
                        </div>
                    </div>
                </div> 
                <div className="gpt__editor-forms">
                    <form 
                        className="gpt__editor-form"
                        onSubmit={handleSubmit}
                    >
                        <div className="gpt__editor-formwrapp">
                            <div className="gpt__editor-inputwrapp">
                                <div className="gpt__editor-titles">
                                    Название страницы
                                </div>
                                <input 
                                    type="text" 
                                    required 
                                    placeholder='О компании/Наши приемущества/...'
                                    name='username'
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="gpt__editor-textarea">
                                <div className="gpt__editor-titles">
                                    Краткое содержание
                                </div>
                                <textarea 
                                    required
                                    name='summary'
                                    value={formData.summary} 
                                    onChange={handleChange}                                     
                                ></textarea>
                            </div>
                            <div className="gpt__editor-inputwrapp">
                                <div className="gpt__editor-titles">
                                    Стиль текста
                                </div>
                                <input 
                                    type="text" 
                                    // required
                                    // name="textStyle"
                                    // value={formData.textStyle} 
                                    // onChange={handleChange}  
                                    list='СтильТекста'
                                />
                               <datalist id='СтильТекста'>
                                    <option value="- Информативный"></option>
                                    <option value="- Убедительный"></option>
                                    <option value="- Дружелюбный"></option>
                                    <option value="- Профессиональный"></option>
                                </datalist> 
                            </div>
                            <div className="gpt__editor-inputwrapp">
                                <div className="gpt__editor-titles">
                                    Длинна текста
                                </div>
                                <input 
                                    type="text" 
                                    // required
                                    // name='textLength'
                                    // value={formData.textLength} 
                                    // onChange={handleChange}  
                                />
                                <datalist id='ДлиннаТекста'>
                                    <option value="- Информативный"></option>
                                    <option value="- Убедительный"></option>
                                    <option value="- Дружелюбный"></option>
                                    <option value="- Профессиональный"></option>
                                </datalist>
                            </div> 
                        </div>
                        <div className="gpt__editor-answer">
                            <div className="answer">
                                
                                <div>{serverResponse?.message?.[1]?.content ?? <><GptWindowText/></>}</div>
                            </div>
                        </div>
                        <div className="wrapp__btn-group">
                            <button className='back'>Назад</button>
                            <button type='submit' className='create__text'>Создать текст</button>
                            <button className='again'>Ещё раз</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GptEditor;