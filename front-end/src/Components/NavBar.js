import { Link } from "react-router-dom";
// import img from "../Components/assets/All-World-Travel-Dolls.png";

export default function NavBar() {
  return (
    <nav>
      <div className="dolls-link">
        <Link to="/dolls">
          LOL Surprise Dolls
          {/* <img src={img} /> */}
        </Link>
      </div>
      <button>
        <Link className="new-doll" to="/dolls/new">
          Make a New Doll
        </Link>
      </button>
    </nav>
  );
}
