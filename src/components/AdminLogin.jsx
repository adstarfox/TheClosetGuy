import { useState } from 'react'
import { Form, Formik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styles from './AdminLogin.module.css'

const AdminLogin = () => {
    const [userValidation, setUserValidation] = useState(undefined)
    const [passValidation, setPassValidation] = useState(undefined)
    const navigate = useNavigate()
    const initialValues = {
        username: '',
        password: ''
    }

    const onSubmit = (values) => {
        if (!values.username || !values.password){
        !values.username && setUserValidation(styles.error)
        !values.password && setPassValidation(styles.error)
        return
        }

        axios.post('http://localhost:5050/login', values)
            .then(res => {
                // console.log(res)
                if(res.statusText === 'OK'){
                    localStorage.setItem('adminToken',res.data)
                    navigate('/admin-page')
                }
            })
            .catch(err =>{
                switch(err.response.data){
                    case 'Invalid username':
                        setUserValidation(styles.error)
                        setPassValidation(undefined)
                    break;
                    case 'Invalid Password':
                        setUserValidation(styles.success)
                        setPassValidation(styles.error)
                    break;
                }
            })
                
    }

    let userMsg = userValidation === styles.error? <span className={styles.msg}>Invalid Username</span> : <span className={styles.msg}>Username</span>

    let passMsg = passValidation === styles.error? <span className={styles.msg}>Invalid Password</span> : <span className={styles.msg}>Password</span>

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, handleChange, handleSubmit}) => {
                return (
                    <div className={styles.formBody}>
                        <form className={styles.formBox}>
                            <h1 className={styles.loginTitle}>Admin Login</h1>
                            <div className={styles.form}>
                                <div className={`${styles.input} ${userValidation}`}>
                                    <label htmlFor='username'>Username:</label>
                                    <input 
                                    maxLength={20}
                                    type="text"
                                    placeholder='TheClosetGuy1'
                                    name='username'
                                    value={values.name}
                                    onChange={handleChange}
                                    onClick={() => {setUserValidation(undefined)}}
                                    />
                                    {userMsg}
                                    
                                </div>
                                <div className={`${styles.input} ${passValidation}`}>
                                    <label htmlFor='password'>Password:</label>
                                    <input 
                                    type="password"
                                    placeholder='CoolClosets2023'
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onClick={() => {setPassValidation(undefined)}}
                                    ></input>
                                    {passMsg}
                                </div>
                                <button type="button" onClick={handleSubmit}>Login</button>
                            </div>
                        </form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default AdminLogin