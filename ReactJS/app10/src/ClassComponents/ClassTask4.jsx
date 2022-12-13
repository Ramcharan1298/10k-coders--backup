import { Component } from "react";

export default class Object4 extends Component {
    constructor() {
        super()
        this.state = {
            Heroname: "Sai Dharm Tej",
            Personal: {
                fname: "Sai Dharm",
                lname: "Tej",
                Profession: "Actor",
                Height: "5.8"
            },
            BestMovies: ["Subramanyam for Sale", "Winner", "Supreme"],

            Herodetails : false
        }
    }

    saidharm=()=>{
        this.setState({Herodetails : true})
    }
    render() {
        return (
            <div className="object">
                

                <h1>Click the Below Button to get the Information.....</h1>
                <button onClick={this.saidharm}>Sai Dharm Tej</button>
                {this.state.Herodetails ? 
                <div className="show">
                    <h1>I am {this.state.Heroname}</h1>
                <img src="data:image/jpeg;base64,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" alt="" />

                    <h2>My First Name<li>{this.state.Personal.fname}</li></h2>
                    <h2>My Last Name<li>{this.state.Personal.lname}</li></h2>
                    <h2>My Profession<li>{this.state.Personal.Profession}</li></h2>
                    <h2>My Height<li>{this.state.Personal.Height}</li></h2>
  
                    <h2> Best Movies of his career=={Object.values(this.state.BestMovies).map((val)=>{
                        return <li>{val}</li>
                    })}</h2>
                
                </div> 
                : <h1>😝😝Information Not Available....😝😝</h1>}
            </div>
        )
    }
}