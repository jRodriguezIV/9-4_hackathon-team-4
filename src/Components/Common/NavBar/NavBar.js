import "./NavBar.css"
import logo from './Assets/logo.PNG'
import ax from './Assets/access.PNG'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" />
            <h1><Link to='/'>Access & Learn</Link></h1>
            <h3><Link to='/centers'>CENTERS</Link></h3>
            <hr/>
            <h3><Link>DYSLEXIA TEST</Link></h3>
            <hr/>
            <h3><Link>TEXT CONVERTER</Link></h3>
            <hr/>
            <h3><Link>ABOUT</Link></h3>
            <button><img src={ax} alt="accessibility"/></button>
        </div>
    )
}