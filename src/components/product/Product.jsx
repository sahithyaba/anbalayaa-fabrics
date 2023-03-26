import React from 'react'
import { productImages } from '../../Data/Data';
import './Product.css'
const Product = () => {
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
                  {productImages.map((book) => (<>
                    {/* <img src={book.bookImage} alt={book.bookName} /> */}
                    <div className="book-align ">
                      <img src={book.img} className="card-img-top" alt='book-align' />
                      
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
