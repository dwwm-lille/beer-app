import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="container">
      <Header title="Beer App!" />

      <Search />

      <div className="list">
        <div className="beer">
          <h2>Beer 1</h2>
          <img src="https://images.punkapi.com/v2/6.png" alt="Beer 1" />
        </div>
        <div className="beer">
          <h2>Beer 2</h2>
          <img src="https://images.punkapi.com/v2/2.png" alt="Beer 2" />
        </div>
        <div className="beer">
          <h2>Beer 3</h2>
          <img src="https://images.punkapi.com/v2/5.png" alt="Beer 3" />
        </div>
      </div>
    </div>
  );
}

export default App;
