import { Component } from "react";

export default class Object1 extends Component {
    constructor() {
        super()
        this.state = {
            Heroname: "Vijay Devarakonda",
            Personal: {
                fname: "Vijay",
                lname: "Sai",
                Profession: "Actor",
                Height: "6.00"
            },
            BestMovies: ["Arjun Reddy", "Geetha Godvindam", "Taxiwaala"],

            Herodetails: false
        }
    }

    vijay = () => {
        console.log("vijay is called")
        this.setState({ Herodetails: true })
    };
    
    render() {
        return (
            <div className="object">

                <h1>Click the Below Button to get the Information</h1>
                <button onClick={this.vijay}>Vijay Devarakonda</button>

                {this.state.Herodetails ?
                    <div className="show">
                        <h1>I am {this.state.Heroname}</h1>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1P7RGOjf4jRwcWesZKX9t5GjonICOUXbzmw&usqp=CAU" alt="" />
                        <h2>My First Name <li>{this.state.Personal.fname}</li></h2>
                        <h2>My Last Name <li>{this.state.Personal.lname}</li></h2>
                        <h2>My Profession <li>{this.state.Personal.Profession}</li></h2>
                        <h2>My Height <li>{this.state.Personal.Height}</li></h2>

                        <h2> Best Movies of his career=={Object.values(this.state.BestMovies).map((val) => {
                        return <li>{val}</li>
                    })}</h2>
                    </div>

                    : <h1>😝😝Information Not Available......😝😝!!!!</h1>}
            </div>
        )
    }

}
