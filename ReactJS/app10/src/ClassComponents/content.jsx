import { Component } from "react";

export default class Content extends Component{
    constructor(props){
        super() 
    }
    render(){
        return(
            <div>
                <p> {this.props.Details.Next}Prabhas is the king of Indain Cinema....I am a Die hard fan of Prabhas.....He is the Number One in the Tollywood Industry.....!!!!!</p>
            </div>
        )
    }
}