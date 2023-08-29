import styles from './Aboutus.module.css'
import hanger from '../assets/grant-final-logo1.png'
import ImageSlider from './ImageSlider'


const Aboutus = () => {
    return (
        <div className={styles.about_us_body}>
            <h1>About The Closet Guy</h1>
            <p id={styles.about_us_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo soluta voluptatibus, ad reiciendis impedit qui rem laboriosam mollitia id pariatur eius. Eius ut non amet ipsam beatae dolore atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vero quas, odit distinctio vitae harum laboriosam excepturi nulla dolore est repudiandae ipsa ea quidem saepe praesentium maiores nemo, blanditiis quod?
            Debitis accusamus tempore ut? Cupiditate quod id consequatur assumenda magni, soluta ea reprehenderit aspernatur illo modi tempore, qui unde ipsa possimus facilis doloremque adipisci odit repellat officia. Pariatur, excepturi quod.
            Repellendus quae explicabo reprehenderit, soluta adipisci ratione quibusdam amet, numquam iure consectetur consequatur quas voluptas eveniet ipsa libero eum ipsam itaque atque, sint illum exercitationem optio nobis maiores fugit. Quas?
            Sequi amet numquam libero earum dolores est dolor laboriosam ratione, autem accusamus harum iusto quibusdam similique consectetur officiis? Obcaecati asperiores unde ducimus facilis ex illum in adipisci voluptate, labore quas!
            Quia laudantium assumenda necessitatibus nihil odit dignissimos voluptates odio quas impedit dolor architecto nisi repellendus corrupti distinctio, soluta quasi! Sit minima atque cumque illo debitis nostrum quasi? Unde, adipisci nemo.
            Officiis et nobis eos ab error, reprehenderit voluptatum adipisci nam molestiae neque, sed itaque tempora accusantium ullam tenetur magnam corrupti corporis fuga praesentium cum obcaecati expedita? Deleniti ullam sapiente eius?</p>
            {/* <h2>Example Pics</h2> */}
            <ImageSlider/>
        </div>
    )
}

export default Aboutus