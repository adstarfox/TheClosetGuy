import { Form, Formik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
                console.log(res)
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
                    <form>
                        <label>
                            Username
                            <input 
                            type="text"
                            placeholder='Example@email.com'
                            name='username'
                            value={values.name}
                            onChange={handleChange}
                            />
                        </label>
                        <label>
                            Password
                            <input 
                            type="text"
                            placeholder='Password'
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            />
                        </label>
                        <button type="button" onClick={handleSubmit}>Let me in</button>
                    </form>
                )
            }}
        </Formik>
    )
}

export default AdminLogin