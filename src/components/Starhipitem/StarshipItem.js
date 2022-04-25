import { Link } from "react-router-dom";

function StarshipItem({ name, model, url }) {
  return (
    <Link to={`/starshipinfo/${url}`}>
      <div className="starship-card">
        <h3>{name}</h3>
        <p>{model}</p>
      </div>
    </Link>
  );
}

export default StarshipItem;
