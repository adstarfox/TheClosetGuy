import styles from './Home.module.css'
import img3 from '../assets/3img.jpg'
import img5 from '../assets/5img.jpg'
import garage from '../assets/Garage.jpg'


const Home = () => {
    return (
        <div className={styles.main}>
            {/* <h1 id={styles.home_title}>The Closet Guy</h1> */}
            <div id="first-container" className={styles.home_containers}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam provident officia consequatur voluptas nisi rem exercitationem eum ipsam ex maiores vitae quod voluptatibus velit eligendi iusto adipisci, neque pariatur?
                Provident blanditiis quasi maxime error adipisci soluta, recusandae ullam ipsum eligendi cupiditate eius sequi vel, eveniet id illo vitae, doloribus corrupti saepe accusantium maiores molestiae molestias veniam.</p>
                <img src={img3} alt="closet example 1" />
            </div>
            <span className={styles.middle}>
                <div id={styles.second} className={styles.home_containers}>
                    <img src={img5} alt="closet example 2" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestias adipisci consequatur minus impedit cupiditate libero ipsam odio in laudantium architecto optio dolores nulla omnis, veritatis tenetur facilis nisi deleniti.
                    Explicabo impedit veniam corporis, atque possimus nesciunt mollitia omnis suscipit minus tempora quae quis facere animi laborum. Deleniti amet tempore accusantium maxime tenetur possimus atque, nihil beatae? Rem, reprehenderit ad.</p>
                </div>
            </span>
            <div id={styles.garage} className={styles.home_containers}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae deleniti magnam quisquam dolorem sed in eaque hic tenetur fugit quo vero nobis maiores dicta minus, reiciendis voluptate error praesentium sit.
                Fugit officiis libero a ducimus in at sapiente eos praesentium numquam inventore ipsam rerum laborum cum ipsa tempore sit, illum quas enim eaque! Dicta animi velit aperiam maxime, quam aut?</p>
                <img src={garage} alt="closet example 3" />
            </div>
        </div>
    )
}

export default Home