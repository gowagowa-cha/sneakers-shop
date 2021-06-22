import React from 'react';

const Overlay = () => {
	return (
		<div className="overlay"  style={{ display: 'none'}}>
        <div className="drawer">
          <h2 className="mb-40 d-flex justify-between">
            Корзина
            <img
              className="remove__btn cu-p"
              width={40}
              height={40}
              src="/img/exit.png"
              alt="exit"
            />
          </h2>
          <div className="items">
            <div className="cart__item d-flex align-center">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/3.jpg"
                alt="snearers"
              />
              <div className="mr-15">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 ru. </b>
              </div>
              <img
                className="remove__btn cu-p"
                width={32}
                height={32}
                src="/img/exit.png"
                alt="exit"
              />
            </div>
            <div className="cart__item d-flex align-center">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/3.jpg"
                alt="snearers"
              />
              <div className="mr-15">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 ru. </b>
              </div>
              <img
                className="remove__btn cu-p"
                width={32}
                height={32}
                src="/img/exit.png"
                alt="exit"
              />
            </div>
            <div className="cart__item d-flex align-center">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/3.jpg"
                alt="snearers"
              />
              <div className="mr-15">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 ru. </b>
              </div>
              <img
                className="remove__btn cu-p"
                width={32}
                height={32}
                src="/img/exit.png"
                alt="exit"
              />
            </div>
          </div>

          <ul className="cartTotalBlock mt-30">
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
            <button className="greenButton">
              Оформить заказ
              <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </ul>
        </div>
      </div>
	);
};

export default Overlay;
