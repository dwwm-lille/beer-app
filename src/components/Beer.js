import { Link } from 'react-router-dom';
import slugify from 'slugify';

function Beer({ beer }) {
  return (
    <div className="beer">
      <Link to={`/biere/${beer.id}/${slugify(beer.name, { lower: true })}`}>
        <h2>{beer.name}</h2>
        <img src={beer.image_url} alt={beer.name} />
      </Link>
    </div>
  );
}

export default Beer;
