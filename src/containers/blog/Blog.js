import React from 'react'
import './blog.css';
import {blog01,blog02,blog03,blog04,blog05} from './imports';
import Article from '../../components/article/Article';

function Blog() {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening we are blogging about it</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date='January-4-2023' title='GPT-3 is Future lets see how it is'/>
        </div>
        <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date='January-4-2023' title='GPT-3 is Future lets see how it is'/>
        <Article imgUrl={blog03} date='January-4-2023' title='GPT-3 is Future lets see how it is'/>
        <Article imgUrl={blog04} date='January-4-2023' title='GPT-3 is Future lets see how it is'/>
        <Article imgUrl={blog05} date='January-4-2023' title='GPT-3 is Future lets see how it is'/>
        </div>
      </div>
    </div>
  )
}

export default Blog