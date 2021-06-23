import React from 'react';

import s from './Header.module.scss'

const Header = () => {
	return (
		<header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img className="mr-10" src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase"> sneakers shop</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className={s.cart}>
            <img className={s.logo} width={18} height={18} src="/img/cart.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img className={s.user} width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
	);
};

export default Header;
