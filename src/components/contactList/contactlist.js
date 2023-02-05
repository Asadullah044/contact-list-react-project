import React from 'react';
import ContactCard from './contactCard/contactCard';
import './contactlist.css';

function contactlist(props) {

    return (
        <div className='contactlist'>
            {
                props.list.map((item) => {
                    return <ContactCard item={item} />;
                })
            }
        </div>
    )
}

export default contactlist