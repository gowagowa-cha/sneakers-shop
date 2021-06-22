import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';
import Search from './components/Search';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <Search />
        <div className="d-flex flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
