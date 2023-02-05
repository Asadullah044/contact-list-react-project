import React from 'react'
import './whatgpt.css';
import Feature from '../../components/feature/Feature';

function Whatgpt() {
  return (
    <div className='gpt3__whatgpt3 section__margin section__padding' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT3' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas aspernatur quae, natus ut est possimus nisi hic iste veritatis odit!' />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbot' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, recusandae.'/>
        <Feature title='Knowledgebase' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, recusandae.' />
        <Feature  title='Education' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, recusandae.'/>      </div>
    </div>
  )
}

export default Whatgpt