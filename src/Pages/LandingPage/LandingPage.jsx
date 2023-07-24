import CarouselComp from "../../Components/Carousel/CarouselComp"
import { HiPlay, HiStop } from 'react-icons/hi2'
import "./LandingPage.css"

let speech = new SpeechSynthesisUtterance();

function LandingPage() {

 let textToSpeech1 = () => {
    speech.text = "DISCOVER NEARBY LITERACY PROGRAMS AND SUPPORT."
    speech.rate = 0.75
    window.speechSynthesis.speak(speech)
  }

  let textToSpeech2 = () => {
    speech.text = "OUR USER-FRIENDLY APP CONNECTS YOU WITH LOCATIONS FOR EASY ACCESS TO RESOURCES."
    speech.rate = 0.75
    window.speechSynthesis.speak(speech)
  }

  let textToSpeech3 = () => {
    speech.text = "EMPOWERING COMMUNITIES THROUGH LITERACY."
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
        DISCOVER NEARBY LITERACY PROGRAMS AND SUPPORT.
        &nbsp;<button className='textCardPlayButton' onClick={() => textToSpeech1()}><HiPlay /></button>&nbsp;<button className='textCardPauseButton' onClick={() => speechPause()}><HiStop /></button>
        <br/><br/> OUR USER-FRIENDLY APP CONNECTS YOU WITH LOCATIONS FOR EASY ACCESS TO RESOURCES.
        &nbsp;<button className='textCardPlayButton' onClick={() => textToSpeech2()}><HiPlay /></button>&nbsp;<button className='textCardPauseButton' onClick={() => speechPause()}><HiStop /></button>
        <br/><br/>EMPOWERING COMMUNITIES THROUGH LITERACY.
        &nbsp;<button className='textCardPlayButton' onClick={() => textToSpeech3()}><HiPlay /></button>&nbsp;<button className='textCardPauseButton' onClick={() => speechPause()}><HiStop /></button>
      
        </h3>
      </div>
    </div>
  );
}

export default LandingPage;
