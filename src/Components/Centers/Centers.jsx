import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import CentersTable from "./CentersTable";
import CentersMap from "./CentersMap";
import "./Centers.css";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;


function Centers() {
  const [centers, setCenters] = useState([]);
  const data = useMemo(() => centers, [centers]);

  useEffect(() => {
    axios
      .get(`${API_URL}/${API_KEY}`)
      .then((response) => setCenters(response.data.sort((a, b) => parseInt(a.id) - parseInt(b.id))))
      .catch((error) => console.warn("fetch error", error))
  }, [])

  return (

    <div className="centersContainer">
      <h1>Literacy Program Locations</h1>
      <CentersTable data={data} />
      <CentersMap data={data} />
    </div>
  );
}

export default Centers;