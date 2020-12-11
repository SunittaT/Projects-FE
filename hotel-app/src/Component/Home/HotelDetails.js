import React from 'react';
import './HotelDetails.css';
class HotelDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            hotelDetails :{}
        }
    }
    componentDidMount(props){
        // console.log("level1")
        const id = this.props.match.params.id
        const HotelUrl = `https://developerfunnel.herokuapp.com/hotelsdetails/${id}`;  
        fetch(HotelUrl)
        .then((resp) =>resp.json())
        // .then(data =>console.log(data))
        .then((data) =>
            this.setState(
               { hotelDetails: data[0]}
            ))
        // .catch(console.log("err"))
    }
    render(){
        // console.log(this.state.hotelDetails)
        return(
            <div className="hotelDetails"> 
                <div className="hotelImage">
                    <img src= {this.state.hotelDetails.thumb} alt='hotel-img'/>
                </div>
                <div className="hotelDescription">
                    <h3>{this.state.hotelDetails.name}</h3>
                    <p>{this.state.hotelDetails.locality}</p>
                    <p>{this.state.hotelDetails.city_name}</p>                    
                </div>              
               
                
            </div>
        );
    }
}

export default HotelDetails;