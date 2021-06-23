import styles from './Card.module.scss'

const Card = ({title, price, img}) => {
	return (
		<div className={styles.card}>
            <div className={styles.favorite}>
              <img src="/img/unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src={img} alt="sneakers" />
            <h5 className={styles.sl}>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>{price} руб.</b>
              </div>
              <button className={styles.button} onClick={() => alert(123)}>
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
	);
};

export default Card;
