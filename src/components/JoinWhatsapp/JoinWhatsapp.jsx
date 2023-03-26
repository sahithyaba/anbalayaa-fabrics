import React from 'react'
import './JoinWhatsapp.css'
import whatsapp from '../../Resources/whatsapp.png'
const JoinWhatsapp = () => {
  return (
    <>
        <a href='https://wa.me/+9994466889' className='Whatapp' target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="whatsapp" className='whatsappImg'/>
        </a>
    </>
  )
}

export default JoinWhatsapp
