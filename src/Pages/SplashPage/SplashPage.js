import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import { useState } from 'react'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import scrambled from '../../assets/scrambled.png'
import solvedPic from '../../assets/solved.png'
import './SplashPage.css'
import { Link } from 'react-router-dom'
import fav from '../../assets/blueLogo.PNG'



export default function Splash() {
    const [text, setText] = useState("Unpuzzle the pieces");
    const [solved, setSolved] = useState(false)

    const set = () => {
        setText(`The purpose of this ice-breaker is to raise awareness to the challenges dyslexic people face.`);
        setTimeout(()=>{
            setSolved(!solved)
        }, 2500)
    };

    return (
        <div className='puzzle'>
            <Link to='/home'>
            <section className='topBar'>
                <img src={fav} alt='logo' className='logoImg' />
                <h1>ACCESS & LEARN</h1>
            </section>
            </Link>
            <br />
            <h3>{text}</h3>
            {
                solved ? <img src={solvedPic} alt='solved' className='jigsaw-puzzle' /> : <JigsawPuzzle
                    imageSrc={scrambled}
                    rows={2}
                    columns={2}
                    onSolved={set}
                    className="jigsaw-puzzle"
                />
            }
            <br />
            {
                solved ? <button><Link to='/home' className='buttonLink'>ENTER</Link></button> : null
            }
        </div>
    )
}