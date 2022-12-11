import { Component } from "react";

export class Parent5 extends Component{
    render(){
        return(
            <div className="parent">
                <h1>This is From PARENT CLASS---5</h1>
            </div>
        )
    }
}

export class Child5 extends Component{
    render(){
        return(
            <div className="child">
                <h1>This is From CHILD CLASS---5</h1>
            </div>
        )
    }
}

export default class Main5 extends Component{
    render(){
        return(
            <div className="app5">
                <h1>This is From MAIN CLASS---5</h1>
                <Parent5/>
                <Child5/>
            </div>
        )
    }
}