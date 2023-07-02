import React from 'react'
import RulesImage from '../assets/image-rules-bonus.svg'
import CloseIcon from '../assets/icon-close.svg'
import { useState } from 'react'

const Rules = () => {
    const [modal, setModal] = useState(false)

    const handleClick = () => {
        setModal(prev => !prev)
    }

  return (
    modal ? <div onClick={handleClick}  className='modal-container'>
    <div className='modal-content'>
    <section className='top'>
         <p>RULES</p>
         <img className='close' src={CloseIcon}/>
     </section>
     <img onClick={handleClick} className='rules' src={RulesImage} alt=""/>
    </div>
 </div> :
    <button onClick={handleClick} className='rulesModal'>
        RULES
    </button>
  )
}

export default Rules