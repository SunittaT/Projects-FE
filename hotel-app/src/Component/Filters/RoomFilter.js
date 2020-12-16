import React from 'react';
import axios from 'axios';
import './Filter.css';

// https://developerfunnel.herokuapp.com/hotellist/1?roomtype=1
const rUrl = 'https://developerfunnel.herokuapp.com/hotellist';

//this data is passing to parent for display
class RoomFilter extends React.Component {
   
    filterLogic = (event)=> {
        let roomType = event.target.value;
        let tripId = sessionStorage.getItem('tripId');
        let roomurl ='';
        if(roomType ==='') {
            roomurl=`${rUrl}/${tripId}`;
        }
        else{
            roomurl=`${rUrl}/${tripId}?roomtype=${roomType}`;
        }
        console.log(roomurl)
        axios.get(roomurl)
        .then(response => this.props.hotelPerRoom(response.data)
        )


    }
    render(){
        console.log(this.state)
        return(
        <React.Fragment>
            <center className="filter">Room Filter</center>
            <div onChange={this.filterLogic}>
                <label className="radio">
                    <input type="radio" value=""  name="room"/>All
                </label>
                <label className="radio">
                    <input type="radio" value="1"  name="room"/>Deluxe Room
                </label>
                <label className="radio">
                    <input type="radio" value="2"  name="room"/>Premium Room
                </label>
                <label className="radio">
                    <input type="radio" value="3"  name="room"/>Travel Room
                </label>
                <label className="radio">
                    <input type="radio" value="4"  name="room"/>Semi deluxe Room
                </label>
            </div>

        </React.Fragment>);
    }
}
export default RoomFilter;