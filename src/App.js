import React, { useState, useEffect } from 'react';
import Contactlist from './components/contactList/contactlist.js';
import Navbar from './components/navbar/Navbar.js';
import Form from './components/form/form.js';

function App() {
  const [list, setlist] = useState([
    {
      name: 'Bushra',
      email: 'Yasin'
    },
  ]);
  
  useEffect(()=>{
    let oldlist = JSON.parse(localStorage.getItem('list'));
    oldlist?setlist(oldlist):setlist([]);
  },[]);

  useEffect(()=>{localStorage.setItem('list',JSON.stringify(list))}, [list]);


  return (
    <>
      <Navbar />
      <div className="main">
        <div className='form'><Form setlist={setlist} list={list} /></div>
        <div className='Contact'><Contactlist list={list} /></div>
      </div>
    </>
  )
}

export default App