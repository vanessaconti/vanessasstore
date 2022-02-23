import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function DollEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [doll, setDoll] = useState({
    dollsName: "",
    dollsCollection: "",
    series: "",
    price: "",
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
        <label htmlFor="Dolls Name">Name:</label>
        <input
          id="dollsName"
          value={doll.dollsName}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of LOL Doll"
          required
        />
        <label htmlFor="Collection">Collection:</label>
        <input
          id="dollsCollection"
          type="text"
          value={doll.dollsCollection}
          onChange={handleTextChange}
          placeholder="Name of Collection"
        />
        <label htmlFor="Series Number">Series Number:</label>
        <input
          id="series"
          type="number"
          value={doll.series}
          onChange={handleTextChange}
          placeholder="Series Number"
        />
        <label htmlFor="Price">Price:</label>
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
