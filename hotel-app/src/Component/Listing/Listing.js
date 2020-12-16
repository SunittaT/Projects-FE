import React from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
// import MainFilter from '../Filters/MainFilter';
import RoomFilter from "../Filters/RoomFilter";
import CostFilter from "../Filters/CostFilter";
const lUrl ='https://developerfunnel.herokuapp.com/hotellist';
class Listing extends React.Component {
    constructor() {
        super();
        this.state= {
            hoteldata:''
        }
    }
    componentDidMount() {
        const tripId = this.props.match.params.id; 
        sessionStorage.setItem('tripId',tripId);         
        axios.get(`${lUrl}/${tripId}`)
        .then(response => this.setState({
            hoteldata:response.data
        }))   
    }
    setDataPerFilter = (sortedData) => {
        this.setState({hoteldata:sortedData})

    }
    render() {
        console.log(this.state)
        return(
           <div className="row">
               <div className="col-md-2">
                <RoomFilter hotelPerRoom={(data)=>this.setDataPerFilter(data)}/>
                <CostFilter hotelPerCost={(data)=>this.setDataPerFilter(data)}/>
               
               </div>
               <div className="col-md-10">
                    <ListingDisplay hotellist = {this.state.hoteldata} />
               </div>

           </div>
        );       
    }
}

export default Listing;