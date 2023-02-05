import React from 'react';
import './contactCard.css';

function contactCard(props) {
    let name = props.item.name;
    let email = props.item.email;
  return (
    <div className='contactcard'>
        <h2>{name}</h2>
        <span>{email}</span>
    </div>
  )
}

export default contactCard