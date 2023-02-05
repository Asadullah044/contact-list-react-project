import React from 'react';
import './article.css';

function Article({imgUrl,date,title}) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog-img" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div className="div">
          <p>{date}</p>
          <h3>{title}</h3>
          <p>Read full Article</p>
        </div>
      </div>
    </div>
  )
}

export default Article