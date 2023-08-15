import './Contactus.css'
import { Formik } from "formik"

const Contactus = () => {
    return (
        <body className="universal-body" id="contact-body">
            <h1>Contact Us</h1>
            <div id='contact-container'>
                <aside className="info-container" id='basic-info'>
                    <h1>Phone #</h1>
                    <p>(111) 111-1111</p>
                    <h1>Email</h1>
                    <p>Fake@email.com</p>
                </aside>
                <form className='info-container' id='form'>
                    <label className='form-inputs'>
                        Name
                        <input type="text" />
                    </label>
                    <label className='form-inputs'>
                        Email
                        <input type="text" />
                    </label>
                    <label className='form-inputs'>
                        Phone Number
                        <input type="text" />
                    </label>
                    <label className='form-inputs'>
                        Notes
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </label>
                </form>
            </div>
            
        </body>
    )
}

export default Contactus