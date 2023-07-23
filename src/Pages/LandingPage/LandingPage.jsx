import {useEffect, useState} from 'react'
import CarouselComp from "../../Components/Carousel/CarouselComp"
import axios from 'axios'
import "./LandingPage.css"

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;
let speech = new SpeechSynthesisUtterance();


function LandingPage() {
  const [info, setInfo] = useState([])
  const [play, setPlay] = useState(true)

  useEffect(() => {
    axios
    .get(`${URL}/${KEY}`)
    .then((response) => setInfo(response.data))
    .catch((error) => console.warn("fetch error", error))
  }, [])
  console.log(info)

 let textToSpeech = () => {
    speech.text = "DISCOVER NEARBY LITERACY PROGRAMS AND SUPPORT. OUR USER-FRIENDLY APP CONNECTS YOU WITH LOCATIONS FOR EASY ACCESS TO RESOURCES. EMPOWERING COMMUNITIES THROUGH LITERACY."
    speech.rate = 0.75
    window.speechSynthesis.speak(speech)
  }

  let speechPause = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <div className="LandingPage">
      <CarouselComp />

      <div className='textCard'>
        <h3>
        DISCOVER NEARBY LITERACY PROGRAMS AND SUPPORT.<br/><br/> OUR USER-FRIENDLY APP CONNECTS YOU WITH LOCATIONS FOR EASY ACCESS TO RESOURCES.<br/><br/>EMPOWERING COMMUNITIES THROUGH LITERACY.
        <button className='textCardPlayButton' onClick={() => textToSpeech()}>🔊</button>
        <button className='textCardPauseButton' onClick={() => speechPause()}>⏹️</button>
        </h3>
      </div>
    </div>
  );
}

export default LandingPage;
