import axios from "axios";
import { useState, useEffect } from "react";
import Doll from "./Doll";

function Dolls() {
  const API = process.env.REACT_APP_API_URL;
  const [dolls, setDolls] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/dolls`)
      .then((response) => {
        console.log(response.data);
        setDolls(response.data);
      })
      .catch((error) => console.warn(error));
  }, [API]);

  return (
    <div className="Dolls">
      <section>
        <table>
          <thead>
            <tr>
              <th className="dollname">Doll Names:</th>

              <th>Click Dolls For More Info </th>
            </tr>
          </thead>
          <tbody>
            {dolls.map((doll, index) => {
              return <Doll key={doll.index} doll={doll} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Dolls;
