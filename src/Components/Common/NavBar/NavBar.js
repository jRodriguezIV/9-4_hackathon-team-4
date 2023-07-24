import "./NavBar.css"
import logo from './Assets/logo.PNG'
import ax from './Assets/access.PNG'
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';

export default function Navbar({ toggleTheme, theme }) {
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
            <button onClick={toggleTheme}>{theme === 'light' ? <MdOutlineDarkMode style={{ color: "#F7AD19" }} className="mode" /> : <MdOutlineLightMode style={{ color: "#F7AD19" }} className="mode" />}</button>
        </div>
    )
}