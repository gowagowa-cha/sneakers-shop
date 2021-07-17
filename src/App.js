import React from 'react';
import { Route } from 'react-router-dom';

import Header from './/components/Header';
import Drawer from './/components/Drawer';
import Home from './/components/Pages/Home';
import axios from 'axios';
import Favorites from './/components/Pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [favorite, setFavorite] = React.useState([]);
  const [cartDrawer, setCartDrawer] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchInputValue, setsearchInputValue] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(true)

	// для того чтобы прогружать кнопку фаворитс и added мы должны получить проверку с корзины и избранных, но useEffect работает синхронно
	// useEffect нельзя обернуть в async, надо сделать async функцию внутри
  React.useEffect(() => {
		//я делаю асиннхроную функцию для того что бы дождаться загрузки корзины и фаворитс и потом прогружаем айтемы
    async function fetchData() {
			//перед тем как выполнить запросы сделаем
			setIsLoading(true)
      const responseItems = await axios.get('https://60d9e5885f7bf10017547852.mockapi.io/items');
      const responseCart = await axios.get('https://60d9e5885f7bf10017547852.mockapi.io/cart');
      const responseFavorite = await axios.get('https://60d9e5885f7bf10017547852.mockapi.io/favorites');

			//после запросов
			setIsLoading(false)

      setCartDrawer(responseCart.data);
      setFavorite(responseFavorite.data);
      setItems(responseItems.data);
    }
    fetchData();
  }, []);

  const onAddedCart = (obj) => {
    console.log(obj);
    if (cartDrawer.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://60d9e5885f7bf10017547852.mockapi.io/cart/${obj.id}`);
      setCartDrawer((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://60d9e5885f7bf10017547852.mockapi.io/cart/', obj);
      setCartDrawer((prev) => [...prev, obj]);
    }
  };

  const onRemoveDrawer = (id) => {
    axios.delete(`https://60d9e5885f7bf10017547852.mockapi.io/cart/${id}`);
    setCartDrawer((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorite.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://60d9e5885f7bf10017547852.mockapi.io/${obj.id}`);
        setFavorite((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://60d9e5885f7bf10017547852.mockapi.io/favorites', obj);
        setFavorite((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избраное');
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer onRemove={onRemoveDrawer} items={cartDrawer} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Route path="/" exact>
        <Home
          searchInputValue={searchInputValue}
          setsearchInputValue={setsearchInputValue}
          items={items}
          cartDrawer={cartDrawer}
          onAddToFavorite={onAddToFavorite}
          onAddedCart={onAddedCart}
					isLoading={isLoading}
        />
      </Route>
      <Route path="/favorites" exact>
        <Favorites
          favorite={favorite}
          searchInputValue={searchInputValue}
          onAddToFavorite={onAddToFavorite}
          onAddedCart={onAddedCart}
        />
      </Route>
    </div>
  );
}

export default App;
