import Header from './/components/Header';
import Drawer from './/components/Drawer';
import Card from './/components/Card';
import Search from './/components/Search';

const arr = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: "12 990", imgUrl: '/img/sneakers/1.jpg' },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: "8 990", imgUrl: '/img/sneakers/2.jpg' },
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: "9 990", imgUrl: '/img/sneakers/3.jpg' },
  { title: 'Мужские Кроссовки Under Armour Curry 8', price: "15 990", imgUrl: '/img/sneakers/4.jpg' },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <Search />
        <div className="d-flex flex-wrap">
          {arr.map(({ title, price, imgUrl, index }) => (
            <Card key={`${index}_${title}`} title={title} price={price} img={imgUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
