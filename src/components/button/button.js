import React from 'react';
import './button.css';

function button(props) {
  function onSubmitHandler(e){
    e.preventDefault();
    props.setlist(
        [
            ...props.list,
            props.formData,
        ]
    )
    console.log('its working');
}
  return (
    <>
        <button className='button-simple' onClick={onSubmitHandler}>Click</button>
    </>
  )
}

export default button