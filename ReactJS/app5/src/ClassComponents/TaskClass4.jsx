import { Component } from "react";

export class Parent4 extends Component{
    render(){
        return(
            <div className="parent">
                <h1>This is From PARENT CLASS---4</h1>
            </div>
        )
    }
}

export class Child4 extends Component{
    render(){
        return(
            <div className="child">
                <h1>This is From CHILD CLASS---4</h1>
            </div>
        )
    }
}

export default class Main4 extends Component{
    render(){
        return(
            <div className="app5">
                <h1>This is From MAIN CLASS---4</h1>
                <Child4/>
                <Parent4/>
            </div>
        )
    }
}