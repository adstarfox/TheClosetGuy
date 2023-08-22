import { Form, Formik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styles from './AdminLogin.module.css'

const AdminLogin = () => {
    const navigate = useNavigate()
    const initialValues = {
        username: '',
        password: ''
    }

    const onSubmit = (values) => {
        // console.log(values)
        axios.post('http://localhost:5050/login', values)
            .then(res => {
                // console.log(res)
                if(res.statusText === 'OK'){
                    localStorage.setItem('adminToken',res.data)
                    navigate('/admin-page')
                }
            })
            .catch(err => alert(err.response.data))
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, handleChange, handleSubmit}) => {
                return (
                    <div className={styles.formBody}>
                        <form className={styles.form}>
                            <div className={styles.input}>
                                <h1>Username:</h1>
                                <input 
                                maxLength={20}
                                type="text"
                                placeholder='TheClosetGuy1'
                                name='username'
                                value={values.name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className={styles.input}>
                                <h1>Password:</h1>
                                <input 
                                type="text"
                                placeholder='CoolClosets2023'
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                                />
                            </div>
                            <button type="button" onClick={handleSubmit}>Login</button>
                        </form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default AdminLogin