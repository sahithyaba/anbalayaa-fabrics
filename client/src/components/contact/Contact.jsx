import React from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3mq7gs5', 'template_zika8db', form.current, 'CCPljq9hfAuSSenoW')
      .then((result) => {
        console.log(result.text);
        alert("message sent");

      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
       <div className="contact">
        <div className="form-area">
          <div className="container">
            <div className="row single-form g-0">
              <div className="col-sm-12 col-lg-6">
                <div className="left">
                  <h2><span>Contact Us For</span>Enquiries</h2>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 ">
                <div className="right">
                  <i className="fa fa-caret-left"></i>
                  <form ref={form} onSubmit={sendEmail}>
                    <div class="form-group">
                      <label>Your Name</label>
                      <input id="fullName" type="text" class="form-control" aria-describedby="emailHelp" name="fullName" placeholder="Enter Name" />

                    </div>
                    <div class="form-group">
                      <label>Email Address</label>
                      <input id="email_id" type="email" class="form-control" name="email_id" placeholder="Enter Email" />
                    </div>
                    <div class="form-group">
                      <label>Message</label>
                      <textarea id="message" class="form-control" name="message" placeholder="Message" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0274272966976!2d78.07297109999999!3d10.961300699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2faf6d4958d3%3A0xa081086a52009dcc!2sANBALAYA%20-A-%20FABRIC!5e0!3m2!1sen!2sin!4v1682963259972!5m2!1sen!2sin" 
      width="100%" 
      height="450" 
      style={{border:0}} 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">

      </iframe>
    </div>
  )
}

export default Contact
