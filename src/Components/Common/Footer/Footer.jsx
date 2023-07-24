import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../NavBar/Assets/logo.PNG'

export default function Footer() {


  return (
    <div className="Footer">
      <div className='footerText'>
        <p className='footerContact'><Link to='/contact'>Contact Us</Link></p>&nbsp;<img className='footerImg' src={logo} alt="Logo" />&nbsp;
        <p className='footerAbout'>Designed by <Link to='/about'>The Power Squad</Link></p>
      </div>
    </div>
  )
}