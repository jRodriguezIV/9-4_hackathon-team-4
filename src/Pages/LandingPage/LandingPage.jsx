import {useEffect, useState} from 'react'
import CarouselComp from "../../Components/Carousel/CarouselComp"
import axios from 'axios'
import "./LandingPage.css"

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;

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
    <div className="LandingPage">
      <CarouselComp />

      <div className='textCard'>
        <h3>
        DISCOVER NEARBY LITERACY PROGRAMS AND SUPPORT.<br/><br/> OUR USER-FRIENDLY APP CONNECTS YOU WITH LOCATIONS FOR EASY ACCESS TO RESOURCES.<br/><br/>EMPOWERING COMMUNITIES THROUGH LITERACY.
        </h3>
      </div>
    </div>
  );
}

export default LandingPage;
