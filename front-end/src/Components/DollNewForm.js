import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function DollNewForm() {
  let navigate = useNavigate();

  const addDoll = (newDoll) => {
    console.log("testing1");
    axios
      .post(`${API}/dolls`, newDoll)
      .then(
        (response) => {
          console.log(response);
          navigate(`/dolls`);
        }
        //,
        //(error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [doll, setDoll] = useState({
    dollscollection: "",
    dollsname: "",
    doll_id: "",
    series: "",
    price: "",
    is_featuredrare: false,
    image: "",
  });

  const handleTextChange = (event) => {
    setDoll({ ...doll, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setDoll({ ...doll, is_featuredrare: !doll.is_featuredrare });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDoll(doll);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="dollscollection">Collection Name:</label>
        <input
          id="dollscollection"
          type="text"
          value={doll.dollscollection}
          onChange={handleTextChange}
          placeholder="Name of Collection"
        />

        <label htmlFor="dollsname">Name of Doll:</label>
        <input
          id="dollsname"
          value={doll.dollsname}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of LOL Doll"
          required
        />

        <label htmlFor="doll_id">Doll ID:</label>
        <input
          id="doll_id"
          type="text"
          value={doll.doll_id}
          onChange={handleTextChange}
          placeholder="Collection Doll ID"
        />

        <label htmlFor="series">Collection Series:</label>
        <input
          id="series"
          type="text"
          value={doll.series}
          onChange={handleTextChange}
          placeholder="Series Number"
        />
        <label htmlFor="price">Price of Doll:</label>
        <input
          id="price"
          type="text"
          value={doll.price}
          onChange={handleTextChange}
          placeholder="Price of Doll"
        />

        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="file"
          value={doll.image}
          onChange={handleTextChange}
          placeholder="Doll Image"
        />

        <label htmlFor="is_featuredrare">Is Doll Rare:</label>
        <input
          id="is_featuredrare"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={doll.is_featuredrare}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default DollNewForm;
