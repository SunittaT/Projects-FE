import './QuickSearch.css';
import {Link} from 'react-router-dom';
const DisplayQuickSearch = (props) => {

    const listTrip = ({trips}) => {
        // console.log(trips)
        if(trips){
            return trips.map((item) => {
                    return (
                        <Link to={`/list/${item.trip}`} key={item._id}>
                            <div className="tileContainer">
                                <div className="tileComponent1">
                                    <img src={item.image} alt="trips"/>
                                </div>
                                <div className="tileComponent2">
                                    <div className="componentHeading">
                                        {item.name}
                                    </div>
                                    <div className="componentSubHeading">
                                        Start your {item.name} trip with us.
                                    </div>

                                </div>
                            </div>
                        </Link>
                
                    )
                }           
            );
        }
    }
   
    // console.log(props)
    return(
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">
                    QuickSearch
                </p>
                <p className="quickSearchSubHeading">
                    Discover Trip By Type
                </p>
                <br/>
                {listTrip(props)}
            </div>
        </div>
    );
}
export default DisplayQuickSearch;