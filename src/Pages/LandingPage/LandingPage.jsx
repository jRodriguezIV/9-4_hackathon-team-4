import CarouselComp from "../../Components/Carousel/CarouselComp"
import { HiPlayPause, HiStop } from 'react-icons/hi2'
import "./LandingPage.css"


function LandingPage() {

  let speech = new SpeechSynthesisUtterance();
  let synth = window.speechSynthesis;

 let textToSpeech1 = () => {
  if(!synth.speaking && !synth.paused) {

  
    speech.text = "DISCOVER NEARBY LITERACY PROGRAMS AND SUPPORT."
    speech.rate = 0.75
    synth.speak(speech)
  } else {
    synth.paused ? synth.resume() : synth.pause();
  }
  }

  let textToSpeech2 = () => {
    if(!synth.speaking && !synth.paused) {
    speech.text = "OUR USER-FRIENDLY APP CONNECTS YOU WITH LOCATIONS FOR EASY ACCESS TO RESOURCES."
    speech.rate = 0.75
    window.speechSynthesis.speak(speech)
  } else {
    synth.paused ? synth.resume() : synth.pause();
  }

  }

  let textToSpeech3 = () => {
    if(!synth.speaking && !synth.paused){
    speech.text = "EMPOWERING COMMUNITIES THROUGH LITERACY."
    speech.rate = 0.75
    window.speechSynthesis.speak(speech)
    }else {
      synth.paused ? synth.resume() : synth.pause();
    }
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
        &nbsp;<button className='textCardPlayButton' onClick={() => textToSpeech1()}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={() => speechPause()}><HiStop /></button>
        <br/><br/> OUR USER-FRIENDLY APP CONNECTS YOU WITH LOCATIONS FOR EASY ACCESS TO RESOURCES.
        &nbsp;<button className='textCardPlayButton' onClick={() => textToSpeech2()}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={() => speechPause()}><HiStop /></button>
        <br/><br/>EMPOWERING COMMUNITIES THROUGH LITERACY.
        &nbsp;<button className='textCardPlayButton' onClick={() => textToSpeech3()}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={() => speechPause()}><HiStop /></button>
      
        </h3>
      </div>
    </div>
  );
}

export default LandingPage;
