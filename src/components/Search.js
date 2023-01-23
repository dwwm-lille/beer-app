import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search({ defaultSearch }) {
  let [search, setSearch] = useState(defaultSearch);
  let navigate = useNavigate();
  // Dès qu'on fait une recherche, on envoie l'utilisateur vers la page en question
  let handleSearch = () => search ? navigate(`/recherche/${search}`) : navigate('/');
  let handleKeyup = (event) => event.key === 'Enter' ? handleSearch() : null;

  return (
    <div className="search">
      <input type="text" placeholder="Hoppy, Malt, Angry, New..."
        value={search} onChange={(e) => setSearch(e.target.value)} onKeyUp={handleKeyup} />
      <button onClick={handleSearch} disabled={!search}>Recherche</button>
    </div>
  );
}

export default Search;
