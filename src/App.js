import React from 'react';

import Header from './/components/Header';
import Drawer from './/components/Drawer';
import Card from './/components/Card';
import Search from './/components/Search';
import axios from 'axios';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartDrawer, setCartDrawer] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchInputValue, setsearchInputValue] = React.useState('');

  React.useEffect(() => {
    axios.get('https://60d9e5885f7bf10017547852.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://60d9e5885f7bf10017547852.mockapi.io/cart').then((res) => {
      setCartDrawer(res.data);
    });
  }, []);

  const onAddedCart = (obj) => {
	axios.post('https://60d9e5885f7bf10017547852.mockapi.io/cart/', obj)
   setCartDrawer((prev) => [...prev, obj]);
  };
  const onRemoveDrawer = (id) => {
	axios.delete(`https://60d9e5885f7bf10017547852.mockapi.io/cart/${id}`)
   setCartDrawer((prev) => prev.filter(item => item.id !== id));
  };


  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onRemove={onRemoveDrawer} items={cartDrawer} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <Search searchInputValue={searchInputValue} setsearchInputValue={setsearchInputValue} />
        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchInputValue.toLowerCase()))
            .map(({ title, price, imgUrl, id }) => (
              <Card
                key={id}
                title={title}
                price={price}
                imgUrl={imgUrl}
                onFavorite={() => console.log('Добавили в закладки')}
                onPlus={(obj) => onAddedCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
