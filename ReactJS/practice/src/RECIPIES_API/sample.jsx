import React, { Component } from 'react';
import Recipies from './recipies';
import axios from 'axios'

export default class Sample extends Component {
    constructor(){
        super()
        this.state = {
            recipies :[]
        }
    }
    render() {
        return (
            <div style={{display:"flex"}}>
                {this.state.recipies.map((usr ,i)=> <Recipies key={i} {...usr} />)}
            </div>
        );

    }
async componentDidMount(){
    // var recipieData = await(await fetch("http://localhost:3002/recipes")).json()
    // console.log(recipieData);
    var ramcharan =await axios.get("http://localhost:3002/recipes")
        console.log(ramcharan);
        this.setState({recipies: ramcharan.data})
}
}


