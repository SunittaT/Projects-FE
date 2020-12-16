import React from 'react';
import {Link }from 'react-router-dom';
import './Listing.css';

const ListingDiplay = (props) => {
    const renderList = ({hotellist}) => {
        if(hotellist){
            if(hotellist.length>0){
                console.log(hotellist)
                return hotellist.map((item)=>{
                    return(
                        <div className="Item" key={item._id}>
                            <div className="row">
                                <div className="col-sm-5">
                                    <img className="Image" src={item.thumb} alt="thumb"/>
                                </div>
                                <div className="col-sm-7">
                                    <div className="hotel_name">
                                        <Link to={`/hoteldetails/${item._id}`}>{item.name}</Link></div>
                                    <div className="city_name">{item.city_name}</div>
                                    <div className="address-text">{item.locality}</div>
                                    <div className="address-text">{item.address}</div>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="cuisine">Room Type</div>
                                    <div className="cuisine">Cost for Night</div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="cuisine">
                                        {item.type[0].name},{item.type[1].name},{item.type[2].name}
                                    </div>
                                    <div className="cuisine">Rs.{item.cost}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            else{
               return( 
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <p className="noData">No Data Found</p>
                        </div>
                    </div>
                </div>)
                
            }
        }
        else{
            return(
                <div>
                    <img src="/img/loader.gif" alt="loader"/>
                </div>
            )
        }

    }
    return(
        <div className="container-fluid">
            <div className="main-heading">
                <div className="row">
                    <div className="col-md-12">
                        {renderList(props)}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ListingDiplay;