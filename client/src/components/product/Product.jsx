import React, { useEffect, useState } from 'react'
import { productImages } from '../../Data/Data';
import './Product.css'
const Product = () => {
  const [allImage,setAllImage]=useState([]);
  useEffect(()=>{
    getImage()
  },[])
  {console.log(allImage)}
  function getImage(){
    fetch("http://localhost:5000/get-image",{
            method: "GET",
            
        }).then((res)=>res.json()).then((data)=>{
          console.log(data)
        setAllImage(data.data)
        })
  }
  return (
    <div className='product'>
        <div className='heading'>
        <h1>Our Products</h1>
      </div>
<div className="div container">
          <div className="row">
            <div className="d-flex div container">
              <div className="card d-flex my-4 ml-3" >
                <div className="d-flex align-content-center flex-wrap">
                  {allImage.map((book) => (<>
                    {/* <img src={book.bookImage} alt={book.bookName} /> */}
                    <div className="book-align ">
                      <img src={book.image} className="card-img-top" alt='book-align' />
                      
                    </div>
                  </>
                  )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       
    
  );
}

export default Product
