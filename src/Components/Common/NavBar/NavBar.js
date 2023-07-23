import "./NavBar.css"
import logo from './Assets/logo.PNG'
import ax from './Assets/access.PNG'
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function Navbar() {
    let loc = useLocation()

    return (
        <div className="navbar" style={loc.pathname === "/" ? { display: "none" } : { display: "flex" }}>
            <Link to='/'><img src={logo} alt="logo" /></Link>
            <h1><Link to='/home'>Access & Learn</Link></h1>
            <h3><Link to='/centers'>CENTERS</Link></h3>
            <hr />
            <h3><Link to='/test'>DYSLEXIA TEST</Link></h3>
            <hr />
            <h3><Link to='/about'>ABOUT</Link></h3>
            <button><img src={ax} alt="accessibility" /></button>
        </div>
    )
}