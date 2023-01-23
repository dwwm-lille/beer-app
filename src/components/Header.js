import { Link } from 'react-router-dom';

function Header({ title }) {
  return (
    <div className="header">
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </div>
  );
}

export default Header;
