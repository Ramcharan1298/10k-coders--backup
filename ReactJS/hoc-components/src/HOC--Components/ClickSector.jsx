import React, { Component } from 'react';
import HOC from './HOC';

class ClickSector extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <button type='button' onClick={this.props.handleIncreasing}>Click Me</button>
                <h1>You Clicked me {this.props.takingCount} Times</h1>
            </div>
        );
    }
}

export default HOC(ClickSector);
