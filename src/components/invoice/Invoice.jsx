import React, { useState } from 'react'
import './Invoice.css'


const Invoice = (e) => {
    const [state,setState]=useState(
        {item:'',description:'',qty:'',price:'',tax:'',total:'',tot:'',
        list:[]
    });
    
    const onchangeHandler=(e)=>{
        setState((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
        {console.log(state)}
    }
   
    const create=(e)=>{
        // {console.log(state)}
        
        setState({
            list:[...state.list,{
                item:state.item,
                description:state.description,
                qty:state.qty,
                price:state.price,
                tax: parseInt(state.price*(7/100)),
                total : eval(parseInt(state.price)+parseInt((state.price*(7/100)))),
                // tot:800
            
            }]
        })
// {console.log(state.list)}
        
        e.preventDefault(); 
        
    }
   function handleDelete(id){
        const lists = state.list.filter(li=>li.item!==id)
        setState({list:lists})
   }
  return (
    <div>
      <div className="container">
        <form name='myform' className='form-group mt-5' action="https://formsubmit.co/256331538089f62d6311314e07e50e59" method="POST">
        <input type="hidden" name="_template" value="table"/>
        <input type="hidden" name="_captcha" value="false"></input>
        <div className="row">
                <div className='col-md-6'>
                    <h5><b>Anbalayaa A Fabrics</b></h5>
                </div>
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Date' placeholder='Date' required/>
                </div>
            </div> 
            <div className="row mt-3">
                <div className='col-md-6'>
                    <p>41, Kamarajapuram North, 4th Cross Corner, Karur – 639002. Tamilnadu.India.Design by Harsha infotech</p>
                </div>
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Date Of Expiry' placeholder='Date Of Expiry' required/>
                </div>
            </div> 
            <div className="row ">
                <div className='col-md-6'>
              <p><b>Phone number</b> : +91 4324 231335<br/>

<b>Mobile</b> : +91 99409 55666</p>  


                </div>
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Estimate No' placeholder='Estimate No' required/>
                </div>
            </div> 
            <div className="row">
                <div className='col-md-6'>
                    <p><b>Mail</b> : info@anbalaya.biz, admin@anbalaya.biz</p>
                </div>
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Customer ID' placeholder='Customer ID' required/>
                </div>
            </div> 
            <hr/>
        <div className="row mt-3">
                <div className='col-md-6'>
                    <h5>BILL TO</h5>
                </div>
                <div className='col-md-6'>
                    <h5>SHIP TO</h5>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Contact Name' placeholder='Contact Name' required/>
                </div>
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Name/Dept' placeholder='Name/Dept' required/>
                </div>
            </div>
            <div className="row mt-4">
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Client Company Name' placeholder='Client Company Name' required/>
                </div>
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Client Comapny Name' placeholder='Client Comapny Name' required/>
                </div>
            </div>
            <div className="row mt-4">
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Address' placeholder='Address' required/>
                </div>
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Address' placeholder='Address' required/>
                </div>
            </div>
            <div className="row mt-4">
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Phone' placeholder='Phone' required/>
                </div>
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Phone' placeholder='Phone' required/>
                </div>
            </div>
            <div className="row mt-4">
                <div className='col-md-6'>
                    <input type='email' className='form-control' name='Email' placeholder='Email' required/>
                </div>
                
            </div>


            <div className="row mt-5">
                <div className='col-md-6'>
                    <h5>SHIPMENT INFORMATION</h5>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='P.O.#' placeholder='P.O.#' required/>
                </div>
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Mode of Transportation' placeholder='Mode of Transportation' required/>
                </div>
            </div>
            <div className="row mt-4">
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='P.O.Date' placeholder='P.O.Date' required/>
                </div>
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Transportation Terms' placeholder='Transportation Terms' required/>
                </div>
            </div>
            <div className="row mt-4">
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Letter Of Credit #' placeholder='Letter Of Credit #' required/>
                </div>
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Number Of Packages' placeholder='Number Of Packages' required/>
                </div>
            </div>
            <div className="row mt-4">
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Currency' placeholder='Currency'/>
                </div>
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Est. Gross Weight' placeholder='Est. Gross Weight' required/>
                </div>
            </div>
            <div className="row mt-4">
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Payment Terms' placeholder='Payment Terms' required/>
                </div>
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Est. Net Weight' placeholder='Est. Net Weight' required/>
                </div>
            </div>
            <div className="row mt-4">
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Est. Ship Date' placeholder='Est. Ship Date' required/>
                </div>
                <div className='col-md-6'>
                    <input type='text' className='form-control' name='Carrier' placeholder='Carrier' required/>
                </div>
            </div>
            <hr/>
<div id='contact-form'>
    <div>

        <h5>Add Particulars</h5>
    <div className="row mt-4">
                <div className='col-md-2'>
                    
            <input type='text' name='item' value={state.item} onChange={onchangeHandler} placeholder='Item'required/>
                </div>
                <div className='col-md-2'>
                    
            <input type='text' name='description' value={state.description} onChange={onchangeHandler} placeholder='Description' required/>
                </div>
                <div className='col-md-2'>
                <input type='text' name='qty' value={state.qty} onChange={onchangeHandler} placeholder='Qty' required/>
            
                </div>

                <div className='col-md-2'>
                    
                <input type='text' name='price' value={state.price} onChange={onchangeHandler} placeholder='Price' required/>
                </div>
                {/* <div className='col-md-2'>
                <input type='text' name='tax' value={state.tax} onChange={onchangeHandler} placeholder='Tax'/>
            
                </div>
                <div className='col-md-2'>
                    
                <input type='text' name='total' value={state.total} onChange={onchangeHandler} placeholder='Total'/>
                </div> */}
                <div className='col-md-2'>
        
                <button className='btn btn-success float-right' name='add' id='add' onClick={create}>Add</button>
                {/* <button  className='btn btn-danger float-right' type='reset'>Clear</button> */}
                
                </div>
                
            </div>     
        </div>
        </div>
        <div>
            
    <table name='particulars' id='myTable' className="table table-bordered mt-4">
  <thead>
    <tr>
      <th scope="col">ITEM PART #</th>
      <th scope="col">DESCRIPTION</th>
      <th scope="col">QTY</th>
      <th scope="col">UNIT PRICE</th>
      <th>SALES TAX</th>
      <th>TOTAL</th>
      <th></th> 
    </tr>
  </thead>
  <tbody>
    {state.list?.map((l,index)=>
    <tr key={index}>
    <th scope="row">{index+1}</th>
    <td name='Description'>{l.description}</td>
    <td name='Qty'>{l.qty}</td>
    <td name='Price'>{l.price}</td>
    <td name='Tax'>{l.tax}</td>
    <td name='Total'>{l.total}</td>

   <td><button className='del' name='delete' onClick={()=>handleDelete(l.item)}>Delete</button></td> 
  </tr>
    )}
    
  </tbody>
</table>

  </div>      

<div className="row mt-6">
                <div className='col-md-6'>
                    <h5>SPECIAL NOTES,TERMS OF SERVICE</h5>
                    <textarea name='notes'/>
                </div>
                
                <div className="form-group col-md-2">
      {/* <label >Total</label>
      <input type="text" className="form-control" name='Total' id="total" required/> */}
    </div>
            </div>
            {/* <input type='submit' value={'Send'}/> */}
            <br/>
            <button className='btn btn-success' type='submit'>Send</button>

        </form>
      </div>
    </div>
  )
}

export default Invoice
