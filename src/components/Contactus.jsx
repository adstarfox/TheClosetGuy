import styles from "./Contactus.module.css";
import { Formik } from "formik";
import axios from 'axios'
import { useState,useRef } from 'react'
import emailjs from 'emailjs-com'

const Contactus = () => {
  const [nameValidation, setNameValidation] = useState(undefined)
  const [emailValidation, setEmailValidation] = useState(undefined)
  const [phoneValidation, setPhoneValidation] = useState(undefined)
  const [submition, setSubmition] = useState(false)

  const form = useRef();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    notes: "",
  };

  const onSubmit = (values) => {
    // const emailValues = values;

    const  phoneExp = /\(?(\d{3})\)?[.-\s]?(\d{3})[.-\s]?(\d{4})/.test(values.phone);

    const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)

    if(!values.name || !phoneExp || !emailExp){
      !values.name && setNameValidation(styles.error)
      !emailExp && setEmailValidation(styles.error)
      !phoneExp && setPhoneValidation(styles.error)
      return
    }

    axios.post('http://localhost:5050/quote', values)
        .then((res) => {
            console.log(res.data)
            setSubmition(true)
        })
        .catch(err => console.log(err))

    emailjs.sendForm('service_ln7a2fi', 'template_2qva2f5', form.current, 'nHOB_5yQ-KSoWQUTJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        
  };

  return (
    <>
    <div id={styles.fakeHeader}></div>
    <div className={styles.contactContainer} id="contact-body">
      {/* <h1>Contact Us</h1> */}
        <aside className={styles.sideContainers} id={styles.basicInfo}>
          <aside className={styles.info}>
            <h1>Phone</h1>
            <p>(111) 111-1111</p>
          </aside>
          <aside className={styles.info}>
            <h1>Email</h1>
            <p>Example@email.com</p>
          </aside>
        </aside>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleChange, handleSubmit }) => {
            return (
              <aside className={styles.sideContainers}>
                {!submition ?
                <form ref={form} className={styles.formContainer} id={styles.form}>
                <h2>Quote Request</h2>
                  <div className={`${styles.formInputs} ${nameValidation}`}>
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="First Last"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onClick={() => setNameValidation(undefined)}
                    />
                  </div>
                    <div className={`${styles.formInputs} ${emailValidation}`}>
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Example@email.com"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onClick={() => setEmailValidation(undefined)}
                    />
                  </div>
                  <div className={`${styles.formInputs} ${phoneValidation}`}>
                    <label>Phone #</label>  
                    <input
                      type="text"
                      placeholder="(###) ###-####"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onClick={() => setPhoneValidation(undefined)}
                    />
                  </div>
                  <div className={styles.formInputs} id={styles.textarea}>
                    <label>Notes</label>
                    <textarea
                      name="notes"
                      value={values.notes}
                      onChange={handleChange}
                      id="TextBox"
                      cols="25"
                      rows="10"
                      placeholder="Any additional information about your request?"
                    ></textarea>
                  </div>
                <button type="button" id="submit-btn" onClick={handleSubmit}>Send Request</button>
               </form>
               :
               <div className={styles.formContainer} id={styles.thanks}>
                <p>Thank you for your request!</p> 
                <p>A member of our team will be reaching out soon.</p>
              </div>
                
                }
              </aside>
            );
          }}
        </Formik>
      </div>
      </>
  );
};

export default Contactus;
