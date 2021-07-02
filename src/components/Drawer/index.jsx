import React from 'react';

import s from './Drawer.module.scss'

const Drawer = ({ onClose, onRemove, items}) => {
	return (
		<div className={s.overlay}>
        <div className={s.drawer}>
         <h2 className="mb-40 d-flex justify-between">
            Корзина
            <img
					onClick={onClose}
              className={s.remove__btn}
              width={40}
              height={40} 
              src="/img/exit.png"
              alt="exit"
            />
         </h2>
			<div className={s.items}>
					{
						items.map(el => (
							<div key={el.id} className={s.cart__item}>
					  			<img
								 className="mr-20"
								 width={70}
								 height={70}
								 src={el.imgUrl}
								 alt="sneakers"
								 />
					  			<div className="mr-15">
								 	<p className="mb-5">{el.title}</p>
								 	<b>{el.price} ru. </b>
					  			</div>
					  			<img
								  onClick={() => onRemove(el.id)}
									className={s.remove__btn}
									width={32}
									height={32}
								 	src="/img/exit.png"
								 	alt="exit"
					 		 	/>
							</div>
						))
					}
			</div>
         <ul className={s.cartTotalBlock}>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
            <button className={s.greenButton}>
              Оформить заказ
              <img src="/img/arrow.svg" alt="arrow" />
            </button>
         </ul>
        </div>
      </div>
	);
};

export default Drawer;
