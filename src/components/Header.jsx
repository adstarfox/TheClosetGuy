import hanger from '../assets/grant-final-logo1.png'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()

    let token = localStorage.getItem('adminToken')

    const logoutHandler = () => {
        localStorage.clear()
        navigate('/admin-login')
    }
    return(
        <header id='header'>
            <img id='hanger-pic' src={hanger} alt="The Closet Guy Logo" onClick={()=>navigate('/')}/>
            <h1 className='header-title'>The Closet Guy</h1>
            {token ? <button onClick={logoutHandler}>Logout</button> : <nav className='header-nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about-us'>About Us</NavLink>
                <NavLink to='/contact-us'>Contact Us</NavLink>
            </nav>} 
        </header>
    ) 
}

export default Header