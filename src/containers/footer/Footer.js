import React from 'react'
import './footer.css'
import gpt3logo from '../../assets/logo.svg';

function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Do you want to step in the future before others</h1>
      </div>
      <div className="gpt3__footer-button">
        <p>Request Early access</p>
      </div>
      <div className="gpt3__footer-container">
        <div className="gpt3__footer-container_logo">
          <img src={gpt3logo} alt="logo" />
          <p>CapeTown Block-81 Street Mildew 182 DK, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-container_pdiv'>
          <div className="gpt3__footer-container_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Contacts</p>
            <p>Counters</p>
          </div>
          <div className="gpt3__footer-container_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policies</p>
            <p>Contacts</p>
          </div>
          <div className="gpt3__footer-container_div">
            <h4>Get in touch</h4>
            <p>CapeTown Block-81 Street Mildew 182 DK</p>
            <p>033-12478703</p>
            <p>Info@payme.net</p>
          </div>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>2021 GPT-3.All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer