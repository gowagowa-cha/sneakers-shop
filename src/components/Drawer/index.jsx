import React from 'react';

import s from './Drawer.module.scss'

const Overlay = () => {
	return (
		<div className={s.overlay}  style={{ display: 'none'}}>
        <div className={s.drawer}>
          <h2 className="mb-40 d-flex justify-between">
            Корзина
            <img
              className={s.remove__btn}
              width={40}
              height={40}
              src="/img/exit.png"
              alt="exit"
            />
          </h2>
          <div className={s.items}>
            <div className={s.cart__item}>
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/4.jpg"
                alt="snearers"
              />
              <div className="mr-15">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 ru. </b>
              </div>
              <img
                className={s.remove__btn}
                width={32}
                height={32}
                src="/img/exit.png"
                alt="exit"
              />
            </div>
          </div>
          <div className={s.items}>
            <div className={s.cart__item}>
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/3.jpg"
                alt="snearers"
              />
              <div className="mr-15">
                <p className="mb-5">Кроссовки Puma X Aka Boku Future Rider</p>
                <b>8 990 ru. </b>
              </div>
              <img
                className={s.remove__btn}
                width={32}
                height={32}
                src="/img/exit.png"
                alt="exit"
              />
            </div>
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

export default Overlay;
