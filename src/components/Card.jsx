import React from 'react';

const Card = ({title, price, img}) => {
	return (
		<div className="card">
            <div className="favorite">
              <img src="/img/unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src={img} alt="sneakers" />
            <h5 className="sl">{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>{price}</b>
              </div>
              <button className="button" onClick={() => alert(123)}>
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
	);
};

export default Card;
