import React from 'react';

import Card from '../Card';
import Search from '../Search';

const Home = ({
	searchInputValue,
	favorite,
	items,
	setsearchInputValue,
	onAddedCart,
	onAddToFavorite,	 
	isLoading
}) => {

	// функция renderItems проверяет если идёт загрузка(isLoading)то показываем 8 фейковых карточек, иначе показываем <Card />
	const renderItems = () => {
		const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchInputValue.toLowerCase()))
		return (isLoading ? [...Array(8)] : filtredItems).map((item, id ) => (
			<Card
				key={id}
				{...item}
				onFavorite={(obj) => onAddToFavorite(obj)}
				onPlus={(obj) => onAddedCart(obj)}
				favorited={favorite.some(obj => Number(obj.id) === Number(id))}
				loading={isLoading}
			/>
		))
	}

	return (
		<div className="content p-40">
			<Search searchInputValue={searchInputValue} setsearchInputValue={setsearchInputValue} />
			<div className="d-flex flex-wrap">

					{renderItems()}
					
			</div>
		</div>
	);
};

export default Home;
