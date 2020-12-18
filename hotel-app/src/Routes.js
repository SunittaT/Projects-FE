import {BrowserRouter,Route,Switch} from 'react-router-dom';
import GetBooking from './Component/Booking/GetBooking';
import PlaceBooking from './Component/Booking/PlaceBooking';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home/Home';
import HotelDetails from './Component/Home/HotelDetails'
// import QuickSearch from './Component/Home/QuickSearch';
import Listing from './Component/Listing/Listing';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/home' exact component={Home}/>
                {/* <Route path='/test' component={QuickSearch}/> */}
                <Route path='/hoteldetails/:id'component={HotelDetails}/>
                <Route path='/list/:id' component={Listing}/>
                <Route exact path='/booking' component={GetBooking}/>
                <Route path='/booking/:id' component={PlaceBooking}/>
                
            </Switch>
            <Footer year='2020' month='dec' />       
        
        </BrowserRouter>
        
    );
}
export default Routes;