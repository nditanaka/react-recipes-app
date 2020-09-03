import React, { Fragment } from 'react';
import { Jumbotron } from 'react-bootstrap';



class Header extends React.Component {
    render() {
        return (
            <Jumbotron className="recipes-header">
                <h1>Find your next favorite meal!</h1>
                <p>
                    Search this API for your next favorite recipe.
                </p>
            </Jumbotron>);
    }
}

export default Header;