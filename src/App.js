import React from 'react';

import Header from './/components/Header';
import Drawer from './/components/Drawer';
import Card from './/components/Card';
import Search from './/components/Search';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartDrawer, setCartDrawer] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchInputValue, setsearchInputValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://60d9e5885f7bf10017547852.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddedCart = (obj) => {
    setCartDrawer((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartDrawer} onClose={() => setCartOpened(false)} />}
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
