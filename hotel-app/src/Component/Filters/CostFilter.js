import React from 'react';
import axios from 'axios';
import './Filter.css';
let curl='https://developerfunnel.herokuapp.com/hotellist'
// https://developerfunnel.herokuapp.com/hotellist/1?hcost=1000&lcost=500
class CostFilter extends React.Component {
    filterLogic = (event) => {
        let costValue= event.target.value;
        let tripId= sessionStorage.getItem('tripId');
        let costUrl='';
        
        if(costValue===''){
            costUrl =`${curl}/${tripId}`
        }
        // else if (costValue==='1') {
        //     costUrl =`${curl}/${tripId}?hcost=1000&lcost=500`
        // }
        else if (costValue==='2') {
            costUrl =`${curl}/${tripId}?hcost=2000&lcost=1000`
        }
        else if (costValue==='3') {
            costUrl =`${curl}/${tripId}?hcost=3000&lcost=2000`
        }
        else if (costValue==='4') {
            costUrl =`${curl}/${tripId}?hcost=5000&lcost=3000`
        }
        else if (costValue==='5') {
            costUrl =`${curl}/${tripId}?hcost=10000&lcost=5000`
        }
        else{
            costUrl =`${curl}/${tripId}`;
        }
        console.log(costUrl);
        axios.get(costUrl)
        .then(response =>this.props.hotelPerCost(response.data))
    }
    render(){
        return(
            <React.Fragment>
                <center className="filter">Cost Filter</center>
                <div onChange={this.filterLogic}>
                    <label className="radio">
                        <input type="radio" value=""  name="room"/>All
                    </label>
                    {/* <label className="radio">
                        <input type="radio" value="1"  name="room"/>Between 500- 1000
                    </label> */}
                    <label className="radio">
                        <input type="radio" value="2"  name="room"/>Between 1000- 2000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3"  name="room"/>Between 2000- 3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="4"  name="room"/>Between 3000- 5000
                    </label>
                    <label className="radio">
                        <input type="radio" value="5"  name="room"/>5000 and above
                    </label>
                </div>
            </React.Fragment>
        );
    }
}
export default CostFilter;