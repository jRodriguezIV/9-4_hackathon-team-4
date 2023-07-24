import { useState } from "react"
import { HiPlayPause, HiStop } from 'react-icons/hi2'

export default function TestComponent() {
    let speech = new SpeechSynthesisUtterance();

    const [submitted, setSubmit] = useState(false)
    const [counter, setCounter] = useState(0)
    const [test, setTest] = useState({
        readSlowly: false,
        troubleReading: false,
        readMoreThanOnce: false,
        discomfortOutloud: false,
        omitLetters: false,
        spellCheck: false,
        difficultPronunciation: false,
        avoidBooks: false,
        hardLang: false,
        avoidExReading: false
    })

    let textToSpeech = (input, event) => {
        event.preventDefault();
        if( !window.speechSynthesis.speaking && !window.speechSynthesis.paused){
        speech.text = input
        speech.rate = 0.75
        window.speechSynthesis.speak(speech)
        } else {
            window.speechSynthesis.paused ? window.speechSynthesis.resume() : window.speechSynthesis.pause();
        }
    }

    let speechPause = (event) => {
        event.preventDefault()
        window.speechSynthesis.cancel()
    }


    const handleReadSlowlyChange = () => {
        setTest({ ...test, readSlowly: !test.readSlowly })
    }

    const handleTroubleReadingChange = () => {
        setTest({ ...test, troubleReading: !test.troubleReading })
    }

    const handleReadMoreThanOnceChange = () => {
        setTest({ ...test, readMoreThanOnce: !test.readMoreThanOnce })
    }

    const handleDiscomfortOutloudChange = () => {
        setTest({ ...test, discomfortOutloud: !test.discomfortOutloud })
    }

    const handleOmitLettersChange = () => {
        setTest({ ...test, omitLetters: !test.omitLetters })
    }

    const handleSpellCheckChange = () => {
        setTest({ ...test, spellCheck: !test.spellCheck })
    }

    const handleDifficultPronunciationChange = () => {
        setTest({ ...test, difficultPronunciation: !test.difficultPronunciation })
    }

    const handleAvoidBooksChange = () => {
        setTest({ ...test, avoidBooks: !test.avoidBooks })
    }

    const handleHardLangChange = () => {
        setTest({ ...test, hardLang: !test.hardLang })
    }

    const handleAvoidExReadingChange = () => {
        setTest({ ...test, avoidExReading: !test.avoidExReading })
    }

    const counterFunc = () => {
        setCounter(Object.values(test).reduce((a, item) => a + item, 0))
        console.log(counter)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        counterFunc()
        setSubmit(true)
    }

    return (
        <div className="test">
            <form>
                <h1>Dyslexia Test</h1>
                <p>Select the checkbox if your answer to the question is <strong>"yes"</strong>.</p>
                <div>
                    <input
                        className="check"
                        id="readSlowly"
                        type="checkbox"
                        onChange={handleReadSlowlyChange}
                        checked={test.readSlowly}
                    />
                    <label htmlFor="readSlowly">Do you read slowly?</label>
                    &nbsp;<button className='textCardPlayButton' onClick={(event) => textToSpeech('Do you read slowly?', event)}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={(event) => speechPause(event)}><HiStop /></button>
                </div>
                <div>
                    <input
                        className="check"
                        id="troubleReading"
                        type="checkbox"
                        onChange={handleTroubleReadingChange}
                        checked={test.troubleReading}
                    />
                    <label htmlFor="troubleReading">Did you have trouble learning how to read when you were in school?</label>
                    &nbsp;<button className='textCardPlayButton' onClick={(event) => textToSpeech('Did you have trouble learning how to read when you were in school?',event)}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={(event) => speechPause(event)}><HiStop /></button>
                </div>
                <div>
                    <input
                        className="check"
                        id="readMoreThanOnce"
                        type="checkbox"
                        onChange={handleReadMoreThanOnceChange}
                        checked={test.readMoreThanOnce}
                    />
                    <label htmlFor="readMoreThanOnce">Do you often have to read something two or three times before it makes sense?</label>
                    &nbsp;<button className='textCardPlayButton' onClick={(event) => textToSpeech('Do you often have to read something two or three times before it makes sense?',event)}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={(event) => speechPause(event)}><HiStop /></button>
                </div>
                <div>
                    <input
                        className="check"
                        id="discomfortOutloud"
                        type="checkbox"
                        onChange={handleDiscomfortOutloudChange}
                        checked={test.discomfortOutloud}
                    />
                    <label htmlFor="discomfortOutloud">Are you uncomfortable reading out loud?</label>
                    &nbsp;<button className='textCardPlayButton' onClick={(event) => textToSpeech('Are you uncomfortable reading out loud?',event)}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={(event) => speechPause(event)}><HiStop /></button>
                </div>
                <div>
                    <input
                        className="check"
                        id="omitLetters"
                        type="checkbox"
                        onChange={handleOmitLettersChange}
                        checked={test.omitLetters}
                    />
                    <label htmlFor="omitLetters">Do you omit, transpose, or add letters when you are reading or writing?</label>
                    &nbsp;<button className='textCardPlayButton' onClick={(event) => textToSpeech('Do you omit, transpose, or add letters when you are reading or writing?',event)}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={(event) => speechPause(event)}><HiStop /></button>
                </div>
                <div>
                    <input
                        className="check"
                        id="spellCheck"
                        type="checkbox"
                        onChange={handleSpellCheckChange}
                        checked={test.spellCheck}
                    />
                    <label htmlFor="spellCheck">Do you find you still have spelling mistakes in your writing even after Spell Check?</label>
                    &nbsp;<button className='textCardPlayButton' onClick={(event) => textToSpeech('Do you find you still have spelling mistakes in your writing even after Spell Check?',event)}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={(event) => speechPause(event)}><HiStop /></button>
                </div>
                <div>
                    <input
                        className="check"
                        id="difficultPronunciation"
                        type="checkbox"
                        onChange={handleDifficultPronunciationChange}
                        checked={test.difficultPronunciation}
                    />
                    <label htmlFor="difficultPronunciation">Do you find it difficult to pronounce uncommon multi-syllable words when you are reading?</label>
                    &nbsp;<button className='textCardPlayButton' onClick={(event) => textToSpeech('Do you find it difficult to pronounce uncommon multi-syllable words when you are reading?',event)}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={(event) => speechPause(event)}><HiStop /></button>
                </div>
                <div>
                    <input
                        className="check"
                        id="avoidBooks"
                        type="checkbox"
                        onChange={handleAvoidBooksChange}
                        checked={test.avoidBooks}
                    />
                    <label htmlFor="avoidBooks">Do you choose to read magazines or short articles rather than longer books and novels?</label>
                    &nbsp;<button className='textCardPlayButton' onClick={(event) => textToSpeech('Do you choose to read magazines or short articles rather than longer books and novels?',event)}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={(event) => speechPause(event)}><HiStop /></button>
                </div>
                <div>
                    <input
                        className="check"
                        id="hardLang"
                        type="checkbox"
                        onChange={handleHardLangChange}
                        checked={test.hardLang}
                    />
                    <label htmlFor="hardLang">When you were in school, did you find it extremely difficult to learn a foreign language?</label>
                    &nbsp;<button className='textCardPlayButton' onClick={(event) => textToSpeech('When you were in school, did you find it extremely difficult to learn a foreign language?',event)}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={(event) => speechPause(event)}><HiStop /></button>
                </div>
                <div>
                    <input
                        className="check"
                        id="avoidExReading"
                        type="checkbox"
                        onChange={handleAvoidExReadingChange}
                        checked={test.avoidExReading}
                    />
                    <label htmlFor="avoidExReading">Do you avoid work projects or courses that require extensive reading?</label>
                    &nbsp;<button className='textCardPlayButton' onClick={(event) => textToSpeech('Do you avoid work projects or courses that require extensive reading?',event)}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={(event) => speechPause(event)}><HiStop /></button>
                </div>
                <section className="buttons">
                    {/* <input type="submit" className='submit' value='SUBMIT' /> */}
                    <button onClick={(event) => handleSubmit(event)}>SUBMIT</button>
                    <br />
                    <input type="reset" value='CLEAR' />
                </section>
            </form>
            <section className="results">
                {
                    submitted ? <p><h3>Chance of Dyslexia: {counter * 10}% </h3><p>{(counter >= 7) ? `Based on this results you have dyslexia. \n Next steps: review our resources and literacy help centers, you're not alone🫶🏽` : `Based on this results you don't have dyslexia. Please consult an specialist for a concrete diagnostic!`}</p></p> : <p>Submit to view results</p>
                }
            </section>
        </div>
    )
}