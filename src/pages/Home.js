import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Beer from '../components/Beer';
import Loader from '../components/Loader';
import Search from '../components/Search';
import { useFetch } from '../hooks';

function Home() {
  let [beers, setBeers] = useState([]);
  let [loading, setLoading] = useState(true);
  let params = useParams();

  let fetchBeers = (search) => {
    setBeers([]);
    setLoading(true);

    // On a l'url pour toutes les bières
    let url = 'https://api.punkapi.com/v2/beers';

    // Si on a une recherche on ajoute ?beer_name=toto donc https://api.punkapi.com/v2/beers?beer_name=toto
    if (search) {
      url += '?beer_name=' + search;
    }

    // Avant de faire la requête, on pourrait checker s'il y a déjà des bières dans le localStorage...
    let beers = localStorage.getItem('beers-'+search);

    if (beers) {
      setBeers(JSON.parse(beers)); // On transforme une chaine en tableau d'objets
      setLoading(false);
      return; // On arrête le code car les bières étaient déjà dans le localStorage
    }

    axios.get(url).then(response => {
      setTimeout(() => {
        setBeers(response.data);
        setLoading(false);
        // On peut sauvegarder les bières dans le localstorage pour aller les chercher plus tard
        localStorage.setItem('beers-'+search, JSON.stringify(response.data));
      }, 1000);
    });
  }

  // Le useEffect est appelée à chaque fois que params.search change
  useEffect(() => fetchBeers(params.search), [params.search]);

  // let [beers, loading] = useFetch(
  //   params.search ? `https://api.punkapi.com/v2/beers?beer_name=${params.search}` : 'https://api.punkapi.com/v2/beers'
  // );

  return (
    <> {/* Un fragment est une div invisible */}
      <Search defaultSearch={params.search} />

      {loading && <Loader message="🍻 Les bières arrivent!" />}

      <div className="list">
        {beers.map(beer => <Beer key={beer.id} beer={beer} />)}
      </div>
    </>
  );
}

export default Home;
