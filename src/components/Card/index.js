import React from 'react';
import styles from './Card.module.scss';

const Card = ({ id, title, price, imgUrl, onFavorite, onPlus, favorited = false }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLiked, setIsLaked] = React.useState(favorited);

  const onCkickPlus = () => {
    onPlus({ title, price, imgUrl });
    setIsAdded(!isAdded);
  };

  const onClickLiked = () => {
    onFavorite({ id, title, price, imgUrl });
    setIsLaked(!isLiked);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickLiked}>
        <img src={isLiked ? '/img/liked.svg' : '/img/unliked.svg'} alt="unliked" />
      </div>
      <img width={133} height={112} src={imgUrl} alt="sneakers" />
      <h5 className={styles.sl}>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>
        <img
          className="cu-p"
          onClick={onCkickPlus}
          src={isAdded ? '/img/checked.svg' : '/img/btn-plus.svg'}
          alt="plus"
        />
      </div>
    </div>
  );
};

export default Card;
