import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="Possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos alias possimus iure ad, corrupti incidunt error minus? Adipisci, nostrum ea.</p>
        <h4>Request for Early access</h4>
      </div>
    </div>
  )
}

export default Possibility