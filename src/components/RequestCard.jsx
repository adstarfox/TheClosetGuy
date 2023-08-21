import axios from 'axios'
import { useState } from 'react'


const RequestCard = ({ request, reloadPage, date }) => {
    // console.log(request)
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

    return(
        <div>
            <div>
                <h1>{request.name}</h1>
                <h4>{date}</h4>
                <p onClick={() => {
                    deleteHandler(request.id)
                    reloadPage()    
                }}>X</p>
            </div>
            <h3>{request.email}</h3>
            <h3>{request.phone}</h3>
            <p>{request.notes}</p>
            {request.adminId ? <p>{request.admin.username}</p> : <button onClick={() => {contactHandler(request.id), reloadPage()}}>Contacted?</button>}
        </div>
    )
}

export default RequestCard
