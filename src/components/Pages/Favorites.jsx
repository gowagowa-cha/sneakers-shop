import React from 'react';
import Card from '../Card/index'
import  AppContext  from '..//../context'

const Favorites = () => {
	//с помощью хука useContext получаем пропсы
	const { favorite, onAddToFavorite } = React.useContext(AppContext)

	return (
		<div className="p-40">
			<div className='mb-40 d-flex justify-between align-center'>
				<h1>Мои Закладки</h1>
			</div>
		<div className='d-flex flex-wrap'>
			{favorite
           .map(({ title, price, imgUrl, id }) => (
              <Card
                key={id}
					 			id={id}
                title={title}
                price={price}
                imgUrl={imgUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
					 			favorited={true}
              />
            ))}
			</div>
    </div>
	);
};

export default Favorites;
