import React from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '..//../context'


import styles from './Card.module.scss';

const Card = ({
  id,
  title,
  price,
  imgUrl,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) => {
 	
	const {isItemAdded} = React.useContext(AppContext)
  const [isLiked, setIsLaked] = React.useState(favorited);
	const obj = { id, parentId: id, title, price, imgUrl };

  const onCkickPlus = () => {
    onPlus(obj);
  };

  const onClickLiked = () => {
    onFavorite(obj);
    setIsLaked(!isLiked);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={165}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="3" ry="3" width="80" height="25" />
          <rect x="118" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && <div className={styles.favorite} onClick={onClickLiked}>
            <img src={isLiked ? 'img/liked.svg' : 'img/unliked.svg'} alt="unliked" />
          </div>}
          <img width="100%" height={135} src={imgUrl} alt="sneakers" />
          <h5 className={styles.sl}>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>{price} руб.</b>
            </div>
            {onPlus && <img
              className="cu-p"
              onClick={onCkickPlus}
              src={isItemAdded(id) ? 'img/checked.svg' : 'img/btn-plus.svg'}
              alt="plus"
            />}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
