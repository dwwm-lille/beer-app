function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Beer App!</h1>
      </div>

      <div className="search">
        <input type="text" placeholder="Hoppy, Malt, Angry, New..." />
        <button>Recherche</button>
      </div>

      <div className="results">
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
