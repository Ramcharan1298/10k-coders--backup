import { Component } from "react";
import Content from "./content";

export default class Practice extends Component{
    constructor(){
        super()
       this.state = {
            Hero : "PRABHAS",
            Details :{
               Movie : "Adhipurush",
               Next : "SALAAR ",
               Upcoming: "PROJECT - K"
            }
       }
    }
    render(){
        return (
            <div>
                <h2>This is Practicing Props Page....!!!</h2>
                <Content {...this.state}/>
            </div>
        )
    }
}