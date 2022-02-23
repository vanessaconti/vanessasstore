import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function DollDetails() {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const [doll, setDoll] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/dolls/${id}`)
      .then((response) => setDoll(response.data))
      .catch((error) => console.warn(error));
  }, [id, API]);

  const handleDelete = () => {
    axios
      .delete(`${API}/dolls/${id}`)
      .then(
        () => {
          console.log("working");
          navigate(`/dolls`);
        },
        (error) => console.error(error)
      )
      .catch((error) => console.warn(error));
  };

  return (
    <article>
      <h4>{doll.dollsname}</h4>
      <p>{doll.series}</p>
      <p>{doll.doll_id}</p>
      <p>{doll.dollscollection}</p>
      <p>{doll.price}</p>
      <p>
        <img src={doll.image} />
      </p>
      <p>
        Doll is Rare{doll.is_featuredrare ? <span> ✔ </span> : null}{" "}
        {doll.dollsname}
      </p>
      <div className="showNavigation">
        <div>
          <Link to="/dolls">
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/dolls/${doll.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default DollDetails;
