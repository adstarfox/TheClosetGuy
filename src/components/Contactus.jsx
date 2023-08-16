import "./Contactus.css";
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
    <div className="universal-body" id="contact-body">
      <h1>Contact Us</h1>
      <div id="contact-container">
        <aside className="info-container" id="basic-info">
          <h1>Phone #</h1>
          <p>(111) 111-1111</p>
          <h1>Email</h1>
          <p>Fake@email.com</p>
        </aside>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleChange, handleSubmit }) => {
            return (
              <form className="info-container" id="form">
                <label className="form-inputs">
                  Name
                  <input
                    type="text"
                    placeholder="John Doe"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </label>
                <label className="form-inputs">
                  Email
                  <input
                    type="text"
                    placeholder="Example@email.com"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </label>
                <label className="form-inputs">
                  Phone Number
                  <input
                    type="text"
                    placeholder="(###) ###-####"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                </label>
                <label className="form-inputs">
                  Notes
                  <textarea
                    name="notes"
                    value={values.notes}
                    onChange={handleChange}
                    id="TextBox"
                    cols="30"
                    rows="10"
                    placeholder="Any additional information about your request?"
                  ></textarea>
                </label>
                <button type="button" id="submit-btn" onClick={handleSubmit}>Send</button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Contactus;
