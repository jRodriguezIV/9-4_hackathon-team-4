import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import { useState } from 'react'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import scrambled from '../../assets/scrambled.png'
import solvedPic from '../../assets/solved.png'
import './SplashPage.css'
import { Link } from 'react-router-dom'

export default function Splash() {
    const [text, setText] = useState("Unpuzzle the pieces");
    const [solved, setSolved] = useState(false)

    const set = () => {
        setText(`The purpose of this ice-breaker is to raise awareness to the challenges dyslexic people face.`);
        setSolved(!solved)
    };

    return (
        <div className='puzzle'>

            {
                solved ? <img src={solvedPic} alt='solved' /> : <JigsawPuzzle
                    imageSrc={scrambled}
                    rows={3}
                    columns={2}
                    onSolved={set}
                    className="jigsaw-puzzle"
                />
            }
            <br />
            {
                solved ? <button><Link to='/home'>ENTER</Link></button> : null
            }

        </div>
    )
}