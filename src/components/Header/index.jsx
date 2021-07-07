import React from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.scss'

const Header = ({ onClickCart }) => {
	return (
		<header className="d-flex justify-between align-center p-40">
        <Link to="/">
				<div className="d-flex align-center">
					<img className="mr-10 cu-p" src="/img/logo.png" alt="logo"/>
					<div>
						<h3 className="text-uppercase"> sneakers shop</h3>
						<p className="opacity-5">Магазин лучших кроссовок</p>
					</div>
				</div>
		  </Link>
        <ul className="d-flex align-center cu-p">
          <li onClick={onClickCart} className={s.cart}>
            <img className={s.logo} width={18} height={18} src="/img/cart.svg" alt="cart"/>
            <span>1205 руб.</span>
          </li>
          <li className={s.cart}>
				 <Link to="/favorites">
            	<img className={s.logo} width={18} height={18} src="/img/heart.svg" alt="heart"/>
				 </Link>
          </li>
          <li>
            <img className={s.user} width={18} height={18} src="/img/user.svg" alt="user"/>
          </li>
        </ul>
      </header>
	);
};

export default Header;
