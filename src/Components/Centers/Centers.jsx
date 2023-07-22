import axios from "axios";
import { useEffect, useState } from "react";

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;

function Centers() {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/${KEY}`)
      .then((response) => setCenters(response.data))
      .catch((error) => console.warn("fetch error", error))
  }, [])
console.log(centers)

  return (
    <div></div>
  );
}

export default Centers;
