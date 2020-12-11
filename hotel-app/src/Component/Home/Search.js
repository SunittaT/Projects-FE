import React from 'react';
import './Search.css';
import { withRouter } from "react-router-dom";                  

// in this page we have not seperated view and logic for understanding.
class Search extends React.Component {
   
    constructor() {
        super();
        this.state = {
            city:[],
            hotels:[],
                      
        }
    }
    componentDidMount(){
        // console.log("level1")
        const cityUrl = 'https://developerfunnel.herokuapp.com/location';  
        fetch(cityUrl)
        .then((resp) =>resp.json())
        // .then(data =>console.log(data))
        .then((data) =>
            this.setState(
               { city: data}
            ))
        // .catch(console.log("err"))
    }
    renderCity =(data) => {
        // console.log(data)
        return data.map((item) => {
            // console.log(item.city,item.city_name)
            return(
                <option key={item._id} value={item.city}>{item.city_name}</option>
            )
        })        
    }
    changeHandler= (event) => {
        // console.log("chnaged")
        const cityHotel = 'https://developerfunnel.herokuapp.com/hotels?city=';
        const id = event.target.value;
        fetch(`${cityHotel}${id}`)
        .then(resp => resp.json())
        .then(data => this.setState(
           { hotels: data}
        ))
    } 
    listHotels = (data) => {
        if(data){
            return data.map((item) => { 
                return (
                    <option key={item._id} value ={item._id}>
                            {item.name} ---{item.locality}
                    </option>
                )      
            })

        }
       

    };

    displayHotel=(event)=> {
        // console.log(this.state.hotels);
        // console.log(event.target.value);
        // console.log(this.props)
        const id = event.target.value;
        const hotelurl= "/hoteldetails/";
        
        this.props.history.push(`${hotelurl}${id}`);
       
    }

    render(props) {
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={(event)=>this.changeHandler(event)}>
                        <option>----Select the City----</option>
                        {this.renderCity(this.state.city)}
                        
                    </select>
                    <select  className="reataurantsinput" onChange={(event)=>this.displayHotel(event)}>
                        <option>----Select the Hotel----</option>
                        {this.listHotels(this.state.hotels)}                    
                    </select>
                </div>
            </div>
        );
    }

    // this is given just for understanding
    componentWillUnmount(){
        console.log(this.state);
    }
}
export default withRouter(Search);