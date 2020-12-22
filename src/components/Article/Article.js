import React from 'react';

import './styles.css';

export default function Article({ title, image, text }) {
  return (
    <div className="article">
      <span>{title}</span>
      <img src={image} alt={title} className="image" />
      <span>{text}</span>
    </div>
  )
}