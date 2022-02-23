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
    dollsname: "",
    dollscollection: "",
    series: "",
    doll_id: "",
    price: "",
    is_featuredrare: false,
  });

  const handleTextChange = (event) => {
    setDoll({ ...doll, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDoll(doll);
  };

  // const handleCheckboxChange = () => {
  //setDoll({ ...doll, is_featuredrare: !doll.is_featuredrare });
  // };
  return (
    <div className="New">
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
        <label htmlFor="series">SERIES:</label>
        <input
          id="series"
          type="text"
          value={doll.series}
          onChange={handleTextChange}
          placeholder="Series Number"
        />
        <label htmlFor="doll_id">DOLL_ID:</label>
        <input
          id="doll_id"
          type="text"
          value={doll.doll_id}
          onChange={handleTextChange}
          placeholder="Collection Doll ID"
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
