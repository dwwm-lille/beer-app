function Beer({ beer }) {
  return (
    <div className="beer">
      <h2>{beer.name}</h2>
      <img src={beer.image_url} alt={beer.name} />
    </div>
  );
}

export default Beer;
