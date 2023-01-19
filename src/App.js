import Beer from './components/Beer';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="container">
      <Header title="Beer App!" />

      <Search />

      <div className="list">
        <Beer beer={{ name: 'Beer 1', image_url: 'https://images.punkapi.com/v2/6.png' }} />
        <Beer beer={{ name: 'Beer 2', image_url: 'https://images.punkapi.com/v2/2.png' }} />
        <Beer beer={{ name: 'Beer 3', image_url: 'https://images.punkapi.com/v2/5.png' }} />
      </div>
    </div>
  );
}

export default App;
