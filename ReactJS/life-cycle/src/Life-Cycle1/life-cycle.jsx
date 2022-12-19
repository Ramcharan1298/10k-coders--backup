import React, { Component } from 'react';

export default class LifeCycle extends Component {
    constructor(){
        super()
        this.state={
            message :{
                mess:"Hi this is a Hero of bahubali"
            },
            Herodetails: false
        }
        console.log("I am a constructor");

        
    }
    adduser=()=>{
        this.setState({Herodetails :true})
    }
    render() {
        console.log("I from render ");
        return (
            <div>
                <button onClick={this.adduser}>add User</button><br />
                {this.state.Herodetails && this.state.message.mess }
            </div>
        );
    }
    // componentDidMount(){
    //     console.log("I am from componentDidMount");
    // }
}


