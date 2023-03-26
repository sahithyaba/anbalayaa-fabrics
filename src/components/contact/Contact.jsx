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
    </div>
  )
}

export default Contact
