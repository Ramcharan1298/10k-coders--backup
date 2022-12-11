import { Component } from "react";

export class ParentClass extends Component{
    render(){
        return (
            <div className="parent">
                <h1>This is From PARENT CLASS---1</h1>
            </div>
        )
    }
}

export class ChildClass extends Component{
    render(){
        return(
            <div className="child">
                <h1>This is From CHILD CLASS---1</h1>
            </div>
        )
    }
}

export default class Main extends Component{
    render(){
        return(
            <div className="app5">
                <h1>This is From MAIN CLASS---1</h1>
                <ParentClass/>
                <ChildClass/>
            </div>
        )
    }
}

