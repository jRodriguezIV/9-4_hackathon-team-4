import { useState } from "react"

export default function TestComponent() {
    const [submitted, setSubmit] = useState(false)
    const [counter, setCounter] = useState(0)
    const [result, setResult] = useState('')
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

    const displayResult = () => {
        if (counter >= 7) {
            setResult(`Based on this results you have dyslexia. Next steps: review our resources and literacy help centers, you're not alone🫶🏽`)
        } else {
            setResult(`Based on this results you don't have dyslexia. Please consult an specialist for a concrete diagnostic!`)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        counterFunc()
        displayResult()
        setSubmit(!submitted)
    }

    return (
        <div className="test">
            <form onSubmit={handleSubmit}>
                <h1>Dyslexia Test</h1>
                <p>Select the checkbox if your answer to the question is <strong>"yes"</strong>.</p>
                <p>Hover over question for enhanced reading.</p>
                <div>
                    <input
                        className="check"
                        id="readSlowly"
                        type="checkbox"
                        onChange={handleReadSlowlyChange}
                        checked={test.readSlowly}
                    />
                    <label htmlFor="readSlowly">Do you read slowly?</label>
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
                </div>
                <section className="buttons">
                    <input type="submit" className='submit' value='SUBMIT' />
                    <br />
                    <input type="reset" value='CLEAR' />
                </section>
            </form>
            <section className="results">
                {
                    submitted ? <p><h3>Chance of Dyslexia: {counter * 10}% </h3><p>{result}</p></p> : <p>Submit to view results</p>
                }
            </section>
        </div>
    )
}