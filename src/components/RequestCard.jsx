import axios from 'axios'
import { useState } from 'react'
import styles from './RequestCard.module.css'
import { MdDelete } from 'react-icons/md'



const RequestCard = ({ request, reloadPage, createdDate, contactedDate }) => {
    // console.log(request)
    const [deleted, setDeleted] = useState(false)
    const token = localStorage.getItem('adminToken')


    const contactHandler = async (id) => {
        try {
            const parsedToken = JSON.parse(atob(token.split('.')[1]));

            let body = {
                username: parsedToken.username,
                requestId: id
            }
            
            await axios.put('http://localhost:5050/contacted', body, {
                headers: {
                    authorization: token
                }
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    const deleteHandler = async (id) => {
        try {
            await axios.delete(`http://localhost:5050/admin-page/${id}`, {
                headers: {
                    authorization: token
                }
            })
        } catch (error) {
            console.log('Error in deleteHandler')
            console.log(error)
        }
    }

    let name = ''
    if(request.name.length){
        name = request.name.split(' ')
    }
    
    console.log(name)
    return(
        <div className={styles.cardContainer}>
            <div className={styles.headerDiv}>
                <h1>{createdDate}</h1>
                {
                    !deleted ? <p id={styles.deleteIcon} onClick={() => {setDeleted(true)}}><MdDelete/></p>
                    :
                    <div>
                        <p>Delete?</p>
                        <button onClick={() => {
                            deleteHandler(request.id)
                            reloadPage()    
                        }}>Yes</button>
                        <button onClick={() => {setDeleted(false)}}>No</button>
                    </div>
                }
            </div>
            <h2>{request.name}</h2>
            <span className={styles.infoContainer}>
                <aside>
                    <label htmlFor="email">Email:</label>
                    <h3 name='email'>{request.email}</h3>
                </aside>
                <aside>
                    <label htmlFor="phone">Phone #</label>
                    <h3 name='phone'>{request.phone}</h3>
                </aside>
            </span>
            <h3>Notes:</h3>
            <p id={styles.notes}>{request.notes}</p>
            {request.adminId ? <><p className={styles.admin}>Contacted by: {request.admin.username}</p><p className={styles.admin}>Contacted on: {contactedDate}</p></> : <button onClick={() => {contactHandler(request.id), reloadPage()}}>Contacted?</button>}
        </div>
    )
}

export default RequestCard
