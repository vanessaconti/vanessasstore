import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function DollNewForm() {
  let navigate = useNavigate();

  const addDoll = (newDoll) => {
    axios
      .post(`${API}/dolls`, newDoll)
      .then(
        () => {
          navigate(`/dolls`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [doll, setDoll] = useState({
    dollsName: "",
    dollsCollection: "",
    series: "",
    price: "",
    is_featuredRare: false,
  });

  const handleTextChange = (event) => {
    setDoll({ ...doll, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDoll(doll);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="dollsName">Name:</label>
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
        <label htmlFor="series">SERIES:</label>
        <input
          id="series"
          type="text"
          value={doll.series}
          onChange={handleTextChange}
          placeholder="Series Number"
        />
        <label htmlFor="price">PRICE:</label>
        <input
          id="price"
          type="text"
          value={doll.price}
          onChange={handleTextChange}
          placeholder="Price of Doll"
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default DollNewForm;
