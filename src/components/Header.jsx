import hanger from '../assets/grant-final-logo1.png'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()
    return(
        <header id='header'>
            <img id='hanger-pic' src={hanger} alt="The Closet Guy Logo" onClick={()=>navigate('/')}/>
            <h1 className='header-title'>The Closet Guy</h1>
            <nav className='header-nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about-us'>About Us</NavLink>
                <NavLink to='/contact-us'>Contact Us</NavLink>
            </nav>
        </header>
    ) 
}

export default Header