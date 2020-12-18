
const DisplayBooking = (props) => {
    console.log(props)
    const tableContent=({bookingData}) => {
        if(bookingData){
            return(
                bookingData.map((item)=>{
                    
                    return(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.hotelName}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.status}</td>
                        </tr>                       
                    )                    
                })                
            )
        }
             

    }
    return(
        <div className="container">
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Hotel Name</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>                    
                    {tableContent(props)}
                </tbody>
            </table>
        </div>
    );
}
export default DisplayBooking;