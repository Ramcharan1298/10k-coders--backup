import React, { Component } from 'react';


const HOC =(FromClickSector)=>{
    class Sample extends Component {
        constructor(props){
            super(props);
            this.state={
                count:0,
            }
        }
    
        handleIncreasing=()=>{
            this.setState({takingCount:this.state.count +1})
        }
    
        render() {
            return (
                <FromClickSector
                  takingCount ={this.state.count}
                  handleIncreasing={this.handleIncreasing}
                />
            );
        }
    }
    return Sample;
}

export default HOC;
