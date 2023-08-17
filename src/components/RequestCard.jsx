const RequestCard = ({ request }) => {
    // console.log(request)
    return(
        <div>
            <h1>{request.name}</h1>
            <h3>{request.email}</h3>
            <h3>{request.phone}</h3>
            <p>{request.notes}</p>
        </div>
    )
}

export default RequestCard