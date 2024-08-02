import React from 'react';

const Card = (props) => {
  // console.log(props)
  return (
    <div className="card">
      <img src={props.img} className="card__img" alt="Medicine" />
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
        <h3 className="card__price">{props.price}</h3>
        <button className="card__btn" onClick={() => window.open(props.visit_link, '_blank')} rel="noopener noreferrer">Visit</button>
      </div>
    </div>
  );
};

export default Card;
