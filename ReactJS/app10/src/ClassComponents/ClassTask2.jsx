import { Component } from "react";

export default class Object2 extends Component {
    constructor() {
        super()
        this.state = {
            Heroname: "Ram Charan",
            Personal: {
                fname: "Ram",
                lname: "Charan",
                Profession: "Actor",
                Height: "5.8"
            },
            BestMovies: ["Yevadu", "Chirutha", "Maghadheera", "RRR"],

            Herodetails: false
        }
    }

    RamCharan = () => {
        this.setState({ Herodetails: true })
    }
    render() {
        return (
            <div className="object">
                <h1>Click to see the.......Hero Information</h1>
                <button onClick={this.RamCharan}>Ram Charan</button>
                {this.state.Herodetails ?
                    <div className="show">
                        
                        <h1>I am {this.state.Heroname}</h1>
                        <img src="data:image/jpeg;base64,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" alt="" />

                        <h2>My First Name<li>{this.state.Personal.fname}</li></h2>
                        <h2>My Last Name<li>{this.state.Personal.lname}</li></h2>
                        <h2>My Profession<li>{this.state.Personal.Profession}</li></h2>
                        <h2>My Height<li>{this.state.Personal.Height}</li></h2>

                        <h2> Best Movies of his career=={Object.values(this.state.BestMovies).map((val) => {
                            return <li>{val}</li>
                        })}</h2>
                    </div>

                    : <h1>😝😝Information Not Available ....😝😝!!!!!</h1>}


            </div>
        )
    }
}