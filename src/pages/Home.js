import axios from 'axios';
import { useEffect, useState } from 'react';
import Beer from '../components/Beer';
import Loader from '../components/Loader';
import Search from '../components/Search';

function Home() {
  let [beers, setBeers] = useState([]);
  let [loading, setLoading] = useState(true);

  let fetchBeers = () => {
    axios.get('https://api.punkapi.com/v2/beers').then(response => {
      setTimeout(() => {
        setBeers(response.data);
        setLoading(false);
      }, 1000);
    });
  }

  useEffect(() => fetchBeers(), []);

  return (
    <> {/* Un fragment est une div invisible */}
      <Search />

      {loading && <Loader message="🍻 Les bières arrivent!" />}

      <div className="list">
        {beers.map(beer => <Beer key={beer.id} beer={beer} />)}
      </div>
    </>
  );
}

export default Home;
