import React from 'react';

const Footer = (props) => {
    return(
        <React.Fragment>
            <hr/>
            <center>
                <small>&copy; Dream Works {props.month} {props.year}</small>
            </center>
        </React.Fragment>
    )
}

export default Footer;