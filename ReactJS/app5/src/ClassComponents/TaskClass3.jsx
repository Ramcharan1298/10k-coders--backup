import { Component } from "react";

export class Parent3 extends Component{
    render(){
        return(
            <div className="parent">
                <h1>This is From PARENT CLASS---3</h1>
            </div>
        )
    }
}

export class Child3 extends Component{
    render(){
        return(
            <div className="child ">
                <h1>This is From CHILD CLASS---3</h1>
            </div>
        )
    }
}

export default class Main3 extends Component{
    render(){
        return(
            <div className="app5">
                <h1>This is From MAIN CLASS---3</h1>
                <Parent3/>
                <Child3/>
            </div>
        )
    }
}