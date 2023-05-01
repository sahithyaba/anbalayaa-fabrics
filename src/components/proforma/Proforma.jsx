import React,{useState} from 'react'
import './Proforma.css'
import invoice from '../../Resources/invoice.jpg'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
const Proforma = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Proforma invoice.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Proforma invoice.pdf';
            alink.click();
        })
    })
}
  return (
    <>
    {/* <button className='Invoice' onClick={()=>navigate("/Invoice")}><img className='image' src={invoice} alt="invoice"/></button> */}
    
            <Popup trigger=
                {<button className='Invoice' ><img className='image' src={invoice} alt="invoice"/></button>}
                position="top">
                <button className='btn btn-info' onClick={()=>navigate("/Invoice")}>Online form</button>
                <button className='btn btn-secondary' id='down' onClick={onButtonClick}>Download form</button>
            </Popup>
    
            
      
    </>
  )
}

export default Proforma
