import React from 'react';
import './HotelDetails.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
  };

class HotelDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            hotelDetails :{},
            tripId:sessionStorage.getItem('tripId')
        }
    }
    async componentDidMount(){
        const id = this.props.match.params.id
        const HotelUrl = `https://developerfunnel.herokuapp.com/hotelsdetails/${id}`;
        const hotelResp = await axios.get(HotelUrl)
        this.setState({ hotelDetails: hotelResp.data[0]})
        sessionStorage.setItem('hotel',this.state.hotelDetails.name)
        
    }
    // componentDidMount(props){
    //     // console.log("level1")
    //     const id = this.props.match.params.id
    //     const HotelUrl = `https://developerfunnel.herokuapp.com/hotelsdetails/${id}`;  
    //     fetch(HotelUrl)
    //     .then((resp) =>resp.json())
    //     // .then(data =>console.log(data))
    //     .then((data) =>
    //         this.setState(
    //            { hotelDetails: data[0]}
    //         ))
    //     // .catch(console.log("err"))
    // }
    render(){
        console.log(this.state)
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-md-11">
                                <h2>{this.state.hotelDetails.name}</h2>
                            </div>
                            <div className="col-md-1">
                                <Link to={`/list/${this.state.tripId}`} className="btn btn-danger">Back</Link>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <Slider {...settings}>
                                    <div>
                                        <div className="hotelImage">
                                            <img src= {this.state.hotelDetails.thumb} alt='hotel-img'/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="hotelImage">
                                        <img src={window.location.origin + '/img/img1.jpg'} alt='hotel-img'/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="hotelImage">
                                        <img src={window.location.origin + '/img/img2.jpg'} alt='hotel-img'/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="hotelImage">
                                        <img src={window.location.origin + '/img/img3.jpg'} alt='hotel-img'/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="hotelImage">
                                        <img src={window.location.origin + '/img/img4.jpg'} alt='hotel-img'/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="hotelImage">
                                            <img src={window.location.origin + '/img/img5.jpg'} alt='hotel-img'/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="hotelImage">
                                            <img src={window.location.origin + '/img/img6.jpg'} alt='hotel-img'/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="hotelImage">
                                            <img src={window.location.origin + '/img/img7.jpg'} alt='hotel-img'/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="hotelImage">
                                            <img src={window.location.origin + '/img/img8.jpg'} alt='hotel-img'/>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Tabs>
                        <TabList>
                            <Tab>Address</Tab>
                            <Tab>Cost</Tab>
                            <Tab>Amenities</Tab>
                        </TabList>

                        <TabPanel>
                            <h3>{this.state.hotelDetails.locality}</h3>
                            <h3>{this.state.hotelDetails.city_name}</h3>
                        </TabPanel>
                        <TabPanel>
                            <h3>Rs.{this.state.hotelDetails.cost}</h3>
                        </TabPanel>
                        <TabPanel>
                            <h3>Amenities</h3>
                        </TabPanel>
                    </Tabs>
                </div>                
                <div>
                    <Link to={`/booking/${this.state.hotelDetails._id}`} className="btn btn-success">Place Booking</Link>
                </div>
          </div> 
                
              
        );
    }
}

export default HotelDetails;

// import React from 'react';
// import './HotelDetails.css';

// class HotelDetails extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             hotelDetails :{}
//         }
//     }
//     componentDidMount(props){
//         // console.log("level1")
//         const id = this.props.match.params.id
//         const HotelUrl = `https://developerfunnel.herokuapp.com/hotelsdetails/${id}`;  
//         fetch(HotelUrl)
//         .then((resp) =>resp.json())
//         // .then(data =>console.log(data))
//         .then((data) =>
//             this.setState(
//                { hotelDetails: data[0]}
//             ))
//         // .catch(console.log("err"))
//     }
//     render(){
//         // console.log(this.state.hotelDetails)
//         return(
//             <div className="hotelDetails"> 
//                 <div className="hotelImage">
//                     <img src= {this.state.hotelDetails.thumb} alt='hotel-img'/>
//                 </div>
//                 <div className="hotelDescription">
//                     <h3>{this.state.hotelDetails.name}</h3>
//                     <p>{this.state.hotelDetails.locality}</p>
//                     <p>{this.state.hotelDetails.city_name}</p>                    
//                 </div>              
               
                
//             </div>
//         );
//     }
// }

// export default HotelDetails;