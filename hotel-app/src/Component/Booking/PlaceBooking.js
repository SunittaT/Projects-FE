import React from 'react';
import { Link } from 'react-router-dom';
const burl =' http://localhost:8900/booking';
class PlaceBooking extends React.Component {
    constructor() {
        super();
        this.state={
            id:Math.floor(Math.random()* 10000),
            hotelName: sessionStorage.getItem('hotel'),
            name:'',
            phone:'',
            status:'pending'
        }
    }
    clickHandle =(event) =>{
        // console.log(this.state)
        event.preventDefault();
        fetch(burl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
            })
        .then(this.props.history.push('/booking'))
           
        
    }
    changeHandler = (key,value)=> {
        this.setState({
            ...this.state,
            [key]:value

        })
        
    }
    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Booking for {this.state.hotelName}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Order_Id</label>
                            <input type="text" name="order_id" 
                            value={this.state.id} readOnly
                            className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Hotel</label>
                            <input type="text" name="hotel" 
                            value={this.state.hotelName} readOnly
                            className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Name</label>
                            <input type="text" name="name" 
                            value={this.state.name}
                            className="form-control"
                            onChange={(event)=>this.changeHandler(event.target.name,event.target.value)}>                                
                            </input>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Phone</label>
                            <input type="text" name="phone" 
                            value={this.state.phone} 
                            className="form-control"
                            onChange={(event)=>this.changeHandler(event.target.name,event.target.value)}></input>
                        </div>
                        <Link to="/" className="btn btn-danger">Cancel</Link>&nbsp;
                        <button className="btn btn-success" 
                        onClick={this.clickHandle}>Place Booking</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default PlaceBooking