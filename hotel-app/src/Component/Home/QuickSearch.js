import React from 'react';
import DisplayQuickSearch from './DisplayQuickSearch';
import './QuickSearch.css';

const url = 'https://developerfunnel.herokuapp.com/booking';
class QuickSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            trips: ''
        }
    }
    render() {
        console.log(this.state.trips)
        return(
            <DisplayQuickSearch trips={this.state.trips}/>
        );
    }
    componentDidMount() {
        fetch(url,{method:'GET'})
        .then(resp => resp.json())
        .then(data => this.setState({
            trips:data
        }))
    }
}
export default QuickSearch;