import React from 'react';
import axios from 'axios';

import Info from '..//Card/Info';
import { useCart } from '../Hooks/useCart.js';

import s from './Drawer.module.scss';


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onClose, onRemove, items = [], opened }) => {
	//вытаскиваем корзину из кастомного хука 
	const { cartDrawer, setCartDrawer, totalPrice } = useCart();
	//содаю стейт для получения айди заказ
	const [isOrderId, setIsOrderId] = React.useState(null);
	//создаем стейт для кнопки оформления заказ
	const [isOrderComplete, setIsOrderComplete] = React.useState(false);
	//добавляю стейт загрузки
	const [isLoading, setIsLoading] = React.useState(false);

	//вытаскиваю из корзины цену и складываем в общую сумму
	// const totalPrice = cartDrawer.reduce((sum, obj) => obj.price + sum, 0)
	// перенес в кастомный хук

	//функция меняет стейт и очищает корзину
	const onClickOrder = async () => {
		try {
			setIsLoading(true);
			//весь массив в котором есть корзина отправляем на сервер
			const {data} = await axios.post('https://60d9e5885f7bf10017547852.mockapi.io/orders', {
				items: cartDrawer,
			});
	
			setIsOrderId(data.id);
			setIsOrderComplete(true);
			setCartDrawer([]);

			//использую временный костыль так как в mock.api нет метода реплейс
			for (let i = 0; i < cartDrawer.length; i++) {
				const item = cartDrawer[i]
				await axios.delete('https://60d9e5885f7bf10017547852.mockapi.io/cart/' + item.id)
				//делаем тайм что бы мок апи не заблокировал из-за многочисленых запросов
				await delay(1000);
			}

		} catch (error) {
			alert('Ошибка оформления заказа :( !')
		}
		setIsLoading(false);
	}

	return (
		<div className={`${s.overlay} ${opened ? s.overlayVisible : ''}`}>
        <div className={s.drawer}>
         <h2 className="mb-40 d-flex justify-between">
            Корзина
            <img onClick={onClose} className={s.remove__btn} width={40} height={40} src="img/exit.png" alt="exit"/>
         </h2>
			{
				items.length > 0 ?
				<React.Fragment >
					<div className={s.items}>
						{
							items.map(el => (
								<div key={el.id} className={s.cart__item}>
					  				<img
								 		className="mr-20"
								 		width={70}
										height={70}
								 		src={el.imgUrl}
										//  style={{backgroundImage: `url(${el.imgUrl})`}}
									 	alt="sneakers"
								 	/>
					  				<div className="mr-15">
								 		<p className="mb-5">{el.title}</p>
								 		<b>{el.price} руб. </b>
					  				</div>
					  				<img
								 		onClick={() => onRemove(el.id)}
										className={s.remove__btn}
										width={32}
										height={32}
								 		src="img/exit.png"
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
										{/* показываем общую сумму */}
              			<b>{totalPrice} руб. </b>
            		</li>
            		<li>
              			<span>Налог 5%: </span>
              			<div></div>
              			<b>{totalPrice/100*5} руб. </b>
            		</li>
            		<button disabled={isLoading} onClick={onClickOrder} className={s.greenButton}>
              			Оформить заказ
              			<img className='ml-10' src="img/arrow.svg" alt="arrow" />
            		</button>
         		</ul>
				</React.Fragment> :
				<Info title={isOrderComplete ? "Заказ оформлен" : "Корзина пуста"}
							description={isOrderComplete ? `Ваш заказ #${isOrderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок что бы сделать заказ"}
							image={isOrderComplete ? "img/complete-order.jpg": "img/empty.jpg"}/>
			}
        </div>
      </div>
	);
};

export default Drawer;
