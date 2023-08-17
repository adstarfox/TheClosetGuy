import RequestCard from './RequestCard'
import axios from 'axios'
import { useState, useEffect } from 'react'

const AdminPage = () => {
    const [requests, setRequests] = useState([])

    const requestDB = async () => {
        try {
            let req = await axios.get('http://localhost:5050/requests')
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
        <div>{mapped}</div>
    )
}

export default AdminPage