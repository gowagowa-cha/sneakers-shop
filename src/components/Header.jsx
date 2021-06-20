import React from 'react';

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
          <li className="mr-30">
            <img className="mr-30" width={18} height={18} src="/img/cart.svg" />
            <span>1205 ru.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
	);
};

export default Header;
