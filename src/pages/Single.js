import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';

function Single() {
  let params = useParams();
  let [beer, setBeer] = useState();
  let [loading, setLoading] = useState(true);

  let fetchBeer = useCallback(() => {
    axios.get(`https://api.punkapi.com/v2/beers/${params.id}`).then(response => {
      setTimeout(() => {
        setBeer(response.data[0]);
        setLoading(false);
      }, 1000);
    });
  }, [params.id]);

  useEffect(() => fetchBeer(), [fetchBeer]);

  // Pour l'IBU, on affiche 1 cercle jaune de 0 à 20, 2 cercles de 20 à 40...
  let renderIbu = () => {
    if (!beer.ibu) return;

    let stars = Math.ceil(beer.ibu * 5 / 100);

    return (
      <div className="ibu">
        <h3>Ibu {beer.ibu}</h3>
        {[1, 2, 3, 4, 5].map(i => <span className={`circle ${stars >= i ? 'active' : ''}`} key={i}></span>)}
      </div>
    );
  };

  // On affiche le verre 1 pour un ebc à 1, le verre 12 pour un ebc à 24 avec le modulo....
  let renderGlass = () => { 
    if (!beer.ebc) return;

    // let randomGlass = Math.floor(Math.random() * 12) + 1;
    // let randomGlass = Math.max(beer.ebc % 12, 1);
    let randomGlass = Math.ceil(beer.ebc / 10);
    randomGlass = randomGlass > 12 ? Math.floor(Math.random() * 12) + 1 : randomGlass;

    return (
      <div className="glass">
        <img src={`/img/glass-${randomGlass}.jpg`} alt={beer.name} />
        <h3>EBC {beer.ebc} (Glass {randomGlass})</h3>
      </div>
    );
  };

  if (loading) {
    return <Loader message="🍻 La bière arrive!" />;
  }

  return (
    <div className="single">
      <div className="flex">
        <div className="label">
          <img src={beer.image_url} alt={beer.name} />
        </div>

        <div className="desc">
          <h2>{beer.name}</h2>
          <p>{beer.description}</p>
        </div>
      </div>

      <div className="abv">Alc. <strong>{beer.abv}%</strong></div>

      <div className="deets">
        <div>
          <div className="style">
            <h3>Food Pairing</h3>
            <ul>
              {beer.food_pairing.map((food, key) => <li key={key}>{food}</li>)}
            </ul>
          </div>

          {renderIbu()}
        </div>

        {renderGlass()}
      </div>

      <div className="order-container">
        <button className="order">Commander</button>
      </div>
    </div>
  );
}

export default Single;
