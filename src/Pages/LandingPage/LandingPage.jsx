import {useEffect, useState} from 'react'
import CarouselComp from "../../Components/Carousel/CarouselComp"
import axios from 'axios'

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;
import {useEffect, useState} from 'react'
import CarouselComp from "../../Components/Carousel/CarouselComp"
import axios from 'axios'

function LandingPage() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    axios
    .get(`${URL}/${KEY}`)
    .then((response) => setInfo(response.data))
    .catch((error) => console.warn("fetch error", error))
  }, [])
  console.log(info)

  return (
   
  );
}

export default LandingPage;
