const RequestCard = ({ request }) => {
    // console.log(request)
    let token = localStorage.getItem('adminToken')

    const clickHandler = async () => {
        try {
            // axios.
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <h1>{request.name}</h1>
            <h3>{request.email}</h3>
            <h3>{request.phone}</h3>
            <p>{request.notes}</p>
            <button onClick={clickHandler}>Contacted?</button>
        </div>
    )
}

export default RequestCard