import { Component } from "react";

class sixth extends Component{
    render(){
        return (
            <div className="container">
                <img src="data:image/jpeg;base64,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" alt="" />
                 <h1>CLASS---6</h1>
            </div>
        )
    }
}
export default sixth