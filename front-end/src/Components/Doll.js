import { Link } from "react-router-dom";

function Doll({ doll }) {
  return (
    <tr>
      <td>{doll.dollsName}</td>
      <td>
        <Link to={`/dolls/${doll.id}`}>👧🏻👧🏿👧🏽👧🏾👧🏼</Link>
      </td>
    </tr>
  );
}
export default Doll;
