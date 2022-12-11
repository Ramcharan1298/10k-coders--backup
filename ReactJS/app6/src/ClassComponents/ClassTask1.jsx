import { Component } from "react";


export class Object1 extends Component{
   constructor(){
    super()
       this.state = {
           Heroname : "PRABHAS"
       }
   }
   render(){
    return(
        <div className="object">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaqofsZ3rXb5EkhTIi6_zO8p_irKTCrmawQ&usqp=CAU" alt="" />
            <h1>{this.state.Heroname} is the King of Indian Cinema....!!!!_______(CLASS---1)</h1>
        </div>
    )
   }
}