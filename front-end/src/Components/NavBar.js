import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/dolls">Dolls</Link>
      </h1>
      <button>
        <Link to="/dolls/new">New Doll</Link>
      </button>
    </nav>
  );
}
