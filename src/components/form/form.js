import React, { useState } from 'react';
import './form.css';
import Button from '../button/button.js';
function Form(props) {
    const [formData, setformData] = useState({
        name:'',
        email:'',
    });

    function onChangeHandler(e) {
        let value = e.target.value;
        let name = e.target.name;
        setformData({
            ...formData,
             [name] : value,
        })
     };

    return (
        <>
            <div className='center dialog-form-box'>
                <form className=' m-form-body' action="">
                    <label htmlFor="name" className='f-label'>Name:</label>
                    <input type="text" name='name' value={formData.name} autoComplete='off' onChange={onChangeHandler} />
                    <br />
                    <label htmlFor="email" className='f-label'>Email:</label>
                    <input type="text" name='email' value={formData.email} autoComplete='off' onChange={onChangeHandler} />
                    <br />
                    <Button setlist={props.setlist} list={props.list} formData={formData}/>
                </form>
            </div>
        </>
    )
}

export default Form;