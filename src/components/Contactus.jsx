import styles from "./Contactus.module.css";
import { Formik } from "formik";
import axios from 'axios'

const Contactus = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    notes: "",
  };

  const onSubmit = (values) => {
    // console.log(values);
    axios.post('http://localhost:5050/quote', values)
        .then((res) => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
        
  };

  return (
    <div className={styles.contactContainer} id="contact-body">
      {/* <h1>Contact Us</h1> */}
        <aside className={styles.infoContainer} id="basic-info">
          <h1>Phone #</h1>
          <p>(111) 111-1111</p>
          <h1>Email</h1>
          <p>Fake@email.com</p>
        </aside>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleChange, handleSubmit }) => {
            return (
              <form className={styles.infoContainer} id={styles.form}>
                <div className={styles.formInputs}>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Your Name Here"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </div>
                  <div className={styles.formInputs}>
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Example@email.com"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formInputs}>
                  <label>Phone #</label>  
                  <input
                    type="number"
                    placeholder="(###) ###-####"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formInputs}>
                  <label>Notes</label>
                  <textarea
                    name="notes"
                    value={values.notes}
                    onChange={handleChange}
                    id="TextBox"
                    cols="30"
                    rows="10"
                    placeholder="Any additional information about your request?"
                  ></textarea>
                </div>
                <button type="button" id="submit-btn" onClick={handleSubmit}>Send</button>
              </form>
            );
          }}
        </Formik>
      </div>
  );
};

export default Contactus;
