import { Link } from "react-router-dom";

function Doll({ doll }) {
  return (
    <tr className="each-doll">
      <td>{doll.dollsname}</td>
      <td>
        <Link className="each-emoji" to={`/dolls/${doll.id}`}>
          π§π»π§πΏπ§π½π§πΎπ§πΌ
        </Link>
      </td>
    </tr>
  );
}
export default Doll;
