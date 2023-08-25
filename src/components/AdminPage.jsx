import RequestCard from './RequestCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AdminPage.module.css'

const AdminPage = () => {
    const navigate = useNavigate()
    const [requests, setRequests] = useState([])
    const [search, setSearch] = useState('')
    const [checked, setChecked] = useState(false)
    const token = localStorage.getItem('adminToken')

    const reloadPage = () => {
        location.reload()
    }
    
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
    
    let filtered = requests.filter((request) => {
        if (checked && request.name.toLowerCase().includes(search.toLowerCase())){
            if(!request.adminId)
            return request
        } else {
            return request.name.toLowerCase().includes(search.toLowerCase())}
        })
        .map((request, index) => {
        const createdDate = new Date(request.createdAt).toLocaleDateString('en-US');
        const contactedDate = new Date(request.updatedAt).toLocaleDateString('en-US');
        
        return(
            <RequestCard key={index} request={request} reloadPage={reloadPage} createdDate={createdDate} contactedDate={contactedDate} />
            )
        })
        
    useEffect(() => {
        requestDB()
    },[])
        
    return (
        token ? 
        <div className={styles.pageBody}>
            <div className={styles.searchBox}>
                <label>Search
                <input onChange={e => setSearch(e.target.value)} type="search" placeholder='Search Name' /></label>
                <label>Contacted<input type="checkbox" onChange={(e) => {setChecked(!checked)}}/></label>
            </div>
            <span className={styles.requestContainer}>
            {filtered}
            </span>
        </div> 
        : 
        <div>
            <p>Thanks for coming to our webpage. You are not authorized to be here. Please click the button to go to our Home page</p>
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    )
}

export default AdminPage