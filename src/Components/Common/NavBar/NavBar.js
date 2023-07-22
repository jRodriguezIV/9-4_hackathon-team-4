import "./NavBar.css"
import logo from './logo.PNG'

export default function Navbar() {
    return(
        <div className="navbar">
            <img src={logo} alt="logo"/>
            <h1>Access & Learn</h1>
            <h3><label>
                CENTERS
            </label>
            <br/>
                <select>
                <option value=""></option>
                <option value="adult">Adult</option>
                <option value="adolescent">Adolescent</option>
                </select></h3>
                <h3>DYSLEXIA TEST</h3>
                <h3>ABOUT</h3>
                <button>Accessibility</button>
        </div>
    )
}