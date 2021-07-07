import React from 'react';

import Card from '../Card';
import Search from '../Search';

const Home = ({
	searchInputValue,
	items,
	setsearchInputValue,
	onAddedCart,
	onAddToFavorite
}) => {
	return (
		<div className="content p-40">
        <Search searchInputValue={searchInputValue} setsearchInputValue={setsearchInputValue} />
        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchInputValue.toLowerCase()))
            .map(({ title, price, imgUrl, id }) => (
              <Card
                key={id}
					 id={id}
                title={title}
                price={price}
                imgUrl={imgUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddedCart(obj)}
              />
            ))}
        </div>
      </div>
	);
};

export default Home;
