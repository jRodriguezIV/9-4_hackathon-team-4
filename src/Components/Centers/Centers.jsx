import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import CentersTable from "./CentersTable";
import "./Centers.css";

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;

function Centers() {
  const [centers, setCenters] = useState([]);
  const data = useMemo(() => centers, [centers]);

  useEffect(() => {
    axios
      .get(`${URL}/${KEY}`)
      .then((response) => setCenters(response.data.sort((a, b) => parseInt(a.id) - parseInt(b.id))))
      .catch((error) => console.warn("fetch error", error))
  }, [])

  return (
    <div className="centersContainer">
      <h1>Literacy Program Locations</h1>
      <CentersTable data={data} />
    </div>
  );
}

export default Centers;