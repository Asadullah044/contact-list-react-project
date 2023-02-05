import React from 'react'
import './brand.css';
import {google,shopify,atlasian ,slack, dropbox} from'./import.js';
function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={atlasian} alt="google" />
      </div>
      <div>
        <img src={slack} alt="google" />
      </div>
      <div>
        <img src={shopify} alt="google" />
      </div>
      <div>
        <img src={dropbox} alt="google" />
      </div>
    </div> 
  )
}

export default Brand