import hanger from '../assets/grant-final-logo1.png'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()

    let token = localStorage.getItem('adminToken')

    const logoutHandler = () => {
        localStorage.clear('adminToken')
        navigate('/admin-login')
        //funny note
    }
    return(
        <header id={styles.header}>
            <img id={styles.hangerPic} src={hanger} alt="The Closet Guy Logo" onClick={()=>navigate('/')}/>
            {/* <h1 className={styles.headerTitle}>The Closet Guy</h1> */}
            {token ? <button id={styles.logoutBtn} onClick={logoutHandler}>Logout</button> : <nav className={styles.headerNav}>
                <NavLink to='/' className={({isActive}) => (isActive ? styles.active : '')} >Home</NavLink>
                <NavLink to='/about-us' className={({isActive}) => (isActive ? styles.active : '')}>About Us</NavLink>
                <NavLink to='/contact-us' className={({isActive}) => (isActive ? styles.active : '')}>Contact Us</NavLink>
            </nav>} 
        </header>
    ) 
}

export default Header