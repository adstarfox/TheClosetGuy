import styles from './Home.module.css'


const Home = () => {
    return (
        <div className='universal-body'>
            <h1 id='home-title'>Home</h1>
            <div id="first-container" className="home-containers">
                <p>We help people create the closet layout of their dreams</p>
                <img src="" alt="closet example 1" />
            </div>
            <div id="second-container" className="home-containers">
                <img src="" alt="closet example 2" />
                <p>We work with these companies and we've worked with these</p>
            </div>
            <div id="third-container" className="home-containers">
                <p>We would love to help you</p>
                <img src="" alt="closet example 3" />
            </div>
        </div>
    )
}

export default Home