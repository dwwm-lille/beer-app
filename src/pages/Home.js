import axios from 'axios';
import { useEffect, useState } from 'react';
import Beer from '../components/Beer';
import Search from '../components/Search';

function Home() {
  let [beers, setBeers] = useState([]);
  let fetchBeers = () => {
    axios.get('https://api.punkapi.com/v2/beers').then(response => {
      setBeers(response.data);
    });
  }

  useEffect(() => fetchBeers(), []);

  return (
    <>
      <Search />

      <div className="list">
        {beers.map(beer => <Beer key={beer.id} beer={beer} />)}
      </div>
    </>
  );
}

export default Home;
