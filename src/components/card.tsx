import React, { FC } from 'react';
import './card.css';

const Card: FC<{
  title: string;
  text: string;
  image: string;
}> = ({ title, text, image }) => (
  <div className="card">
    <img src={image} alt="" />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default Card;
