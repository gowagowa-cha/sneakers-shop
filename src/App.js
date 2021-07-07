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

  React.useEffect(() => {
   //  axios.get('https://60d9e5885f7bf10017547852.mockapi.io/items').then((res) => {
   //    setItems(res.data);
   //  });
	axios.get('http://localhost:3001/items').then((res) => {
      setItems(res.data);
    });
   //  axios.get('https://60d9e5885f7bf10017547852.mockapi.io/cart').then((res) => {
   //    setCartDrawer(res.data);
   axios.get('http://localhost:3001/cart').then((res) => {
      setCartDrawer(res.data);
    });
   axios.get('http://localhost:3001/favorites').then((res) => {
      setFavorite(res.data);
    });
  }, []);

  const onAddedCart = (obj) => {
    axios.post('http://localhost:3001/cart/', obj);
    setCartDrawer((prev) => [...prev, obj]);
  };
  const onRemoveDrawer = (id) => {
    axios.delete(`http://localhost:3001/cart/${id}`);
    setCartDrawer((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
	  try{
		if(favorite.find(favObj => favObj.id === obj.id)){
			axios.delete(`http://localhost:3001/favorites/${obj.id}`)
			setFavorite((prev) => prev.filter((item) => item.id !== obj.id));
		 } else {
			 const {data} = await axios.post('http://localhost:3001/favorites', obj);
			 setFavorite((prev) => [...prev, data]);
		 }
	  } catch (error){
		alert('Не удалось добавить в избраное')
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
          onAddToFavorite={onAddToFavorite}
          onAddedCart={onAddedCart}
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
