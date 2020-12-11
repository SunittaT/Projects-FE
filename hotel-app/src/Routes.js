import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home/Home';
import HotelDetails from './Component/Home/HotelDetails'
import QuickSearch from './Component/Home/QuickSearch';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/home' exact component={Home}/>
                <Route path='/test' component={QuickSearch}/>
                <Route path='/hoteldetails/:id'component={HotelDetails}/>
                
            </Switch>
            <Footer year='2020' month='dec' />       
        
        </BrowserRouter>
        
    );
}
export default Routes;