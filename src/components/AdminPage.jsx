import RequestCard from './RequestCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminPage = () => {
    const navigate = useNavigate()
    const [requests, setRequests] = useState([])
    let token = localStorage.getItem('adminToken')

    const requestDB = async () => {
        try {
            let req = await axios.get('http://localhost:5050/requests', {
                headers: {
                    authorization: token
                }
            })
            setRequests(req.data)
            // console.log(req.data)
        }catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        requestDB()
    },[])


    let mapped = requests.map((request, index) => {
        return(
            <RequestCard key={index} request={request} />
        )
    })

    return (
        token ? <div>{mapped}</div> : 
        <div>
            <p>Thanks for coming to our webpage. You are not authorized to be here. Please click the button to go to our Home page</p>
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    )
}

export default AdminPage