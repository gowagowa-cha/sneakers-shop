import Header from './components/Header';

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-40 d-flex justify-between">
            Корзина
            <img
              className="remove__btn cu-p"
              width={40}
              height={40}
              src="/img/exit.png"
              alt="exit"
            />
          </h2>
          <div className="items">
            <div className="cart__item d-flex align-center">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/3.jpg"
                alt="snearers"
              />
              <div className="mr-15">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 ru. </b>
              </div>
              <img
                className="remove__btn cu-p"
                width={32}
                height={32}
                src="/img/exit.png"
                alt="exit"
              />
            </div>
            <div className="cart__item d-flex align-center">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/3.jpg"
                alt="snearers"
              />
              <div className="mr-15">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 ru. </b>
              </div>
              <img
                className="remove__btn cu-p"
                width={32}
                height={32}
                src="/img/exit.png"
                alt="exit"
              />
            </div>
            <div className="cart__item d-flex align-center">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/3.jpg"
                alt="snearers"
              />
              <div className="mr-15">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 ru. </b>
              </div>
              <img
                className="remove__btn cu-p"
                width={32}
                height={32}
                src="/img/exit.png"
                alt="exit"
              />
            </div>
          </div>

          <ul className="cartTotalBlock mt-30">
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
            <button className="greenButton">
              Оформить заказ
              <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </ul>
        </div>
      </div>
      <Header />
      <div className="content p-40">
        <div className="mb-40 d-flex justify-between align-center">
          <h1>Все кросовки</h1>
          <div className="search__block">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers" />
            <h5 className="sl">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card active">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="sneakers" />
            <h5 className="sl">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 ru.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="sneakers" />
            <h5 className="sl">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 ru.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="sneakers" />
            <h5 className="sl">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
