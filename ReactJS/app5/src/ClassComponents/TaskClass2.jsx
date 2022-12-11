import { Component } from "react";

export class Parent2 extends Component{
    render(){
        return(
            <div className="parent">
                 <h1>This is From PARENT CLASS---2</h1>
            </div>
        )
    }
}

export class Child2 extends Component{
    render(){
        return(
            <div className="child">
                <h1>This is From CHILD CLASS---2</h1>
            </div>
        )
    }
}

export default class Main2 extends Component{
    render(){
        return(
            <div className="app5">
                <h1>This is From MAIN CLASS---2</h1>
                <Parent2/>
                <Child2/>
            </div>
        )
    }
}