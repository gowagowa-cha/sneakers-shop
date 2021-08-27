import React from 'react';
import axios from 'axios';

import Card from '../Card/index';
// import AppContext from '../../context';

const Orders = () => {
	// const {onAddedCart, onAddToFavorite} = React.useContext(AppContext);
	const [orders, setOrders] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		// создаю аннонимную самовызывающуюся функцию`
		(async () => {
			try {
				const { data } = await axios.get('https://60d9e5885f7bf10017547852.mockapi.io/orders');
				// console.log(data.map((obj) => obj.items).flat()); альтернативный вариант Редьюсу
				setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
				setIsLoading(false)
			} catch (error) {
				alert('Ошибка при запросе заказов');
				console.error(error);
			}
		})();
		
	}, []) 

	return (
		<div className="p-40">
			<div className='mb-40 d-flex justify-between align-center'>
				<h1>Мои Заказы</h1>
			</div>
		<div className='d-flex flex-wrap'>
			{(isLoading ? [...Array(8)] : orders).map((item, index) => (
              <Card
								key={index}
								loading={isLoading}
								{...item}
							/>
            ))}
			</div>
    </div>
	);
};

export default Orders;
