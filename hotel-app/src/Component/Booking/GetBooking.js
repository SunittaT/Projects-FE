import React from 'react';
import axios from'axios';
import DisplayBooking from './DisplayBooking';

const burl =' http://localhost:8900/booking';
class GetBooking extends React.Component {
    constructor() {
        super();
        this.state={
            booking:''
        }
    }
    render() {
        return(
            <DisplayBooking bookingData={this.state.booking} />
        );
    }
    async componentDidMount(){
        const response = await axios.get(burl);
        this.setState({booking:response.data})

    }
}

export default GetBooking;