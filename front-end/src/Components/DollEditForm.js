import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function DollEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [doll, setDoll] = useState({
    dollsname: "",
    dollscollection: "",
    series: "",
    price: "",
    doll_id: "",
  });

  const updateDoll = (updatedDoll) => {
    axios
      .put(`${API}/dolls/${id}`, updatedDoll)
      .then(
        () => {
          navigate(`/dolls`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setDoll({ ...doll, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/dolls/${id}`).then(
      (response) => setDoll(response.data),
      () => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateDoll(doll, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="dollsname">Name:</label>
        <input
          id="dollsname"
          value={doll.dollsname}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of LOL Doll"
          required
        />
        <label htmlFor="dollscollection">Collection:</label>
        <input
          id="dollscollection"
          type="text"
          value={doll.dollscollection}
          onChange={handleTextChange}
          placeholder="Name of Collection"
        />
        <label htmlFor="doll_id">doll_id:</label>
        <input
          id="doll_id"
          type="text"
          value={doll.doll_id}
          onChange={handleTextChange}
          placeholder="Collection Doll ID"
        />
        <label htmlFor="series">Series Number:</label>
        <input
          id="series"
          type="text"
          value={doll.series}
          onChange={handleTextChange}
          placeholder="Series Number"
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="text"
          value={doll.price}
          onChange={handleTextChange}
          placeholder="Price of Doll"
        />

        <br />

        <button type="submit">Submit</button>
      </form>
      <Link to={`/dolls/${id}`}>
        <button>Cancel Leave Doll Alone! </button>
      </Link>
    </div>
  );
}

export default DollEditForm;
