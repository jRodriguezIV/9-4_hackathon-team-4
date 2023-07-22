import axios from "axios";
import { useEffect, useState } from "react";
import "./Centers.css";
import Center from "./Center.jsx";

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;

function Centers() {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/${KEY}`)
      .then((response) => {
        response.data.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        setCenters(response.data);
      })
      .catch((error) => console.warn("fetch error", error))
  }, [])

  function tableHead() {
    const head = ["#", "Service", "Location", "Phone", "City", "Address"];
    return head.map((title) => (
      <th>{title}</th>
    ))
  }

  return (
    <div>
      <h1>Literacy Program Locations</h1>
      <section>
        <table className="centers-table">
          <thead>
            <tr>
              {tableHead()}
            </tr>
          </thead>
          <tbody>
            {centers.map((center) => (
              <Center key={center.id} center={center} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Centers;