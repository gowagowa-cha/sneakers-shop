import React from 'react';
import AppContext from '../../context';

import s from '..//Drawer/Drawer.module.scss'

const Info = ({title, image, description}) => {
	const {setCartOpened} = React.useContext(AppContext)

	return (
		<div className={s.cartEmpty}>
					<img className='mb-20' width={120} height={120} src={image} alt="empty" />
					<h2 className='mb-10'>{title}</h2>
					<p className='mb-40'>{description}</p>
					<button onClick={() => setCartOpened(false)} className={s.greenButton}>
						<img className='mr-10' src="img/prev-arrow.svg" alt="prev-arrow" />
						Вернуться назад
					</button>
				</div>
	);
};

export default Info;
