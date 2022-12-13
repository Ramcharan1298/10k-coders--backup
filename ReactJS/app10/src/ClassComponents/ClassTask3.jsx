import { Component } from "react";

export default class Object3 extends Component {
    constructor() {
        super()
        this.state = {
            Heroname: "Ram Pothineni",
            Personal: {
                fname: "Sri",
                lname: "Ram",
                Profession: "Actor",
                Height: "5.7"
            },
            BestMovies: ["Nenu Sailaja", "Ready", "Ismart Shankar"],

            HeroInfo : false
        }
    }

    rampothineni = ()=>{
        this.setState({HeroInfo : true})
    }
    render() {
        return (
            <div className="object">
                

                <h1>Click the Button to View Info.....!!!!</h1>
                <button onClick={this.rampothineni}>Ram Pothineni</button>
                {this.state.HeroInfo ?
                <div className="show">
                   <h1>I am {this.state.Heroname}</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVmeXXis0tsjHoqJbjb3zN_jOnTSFQcPyQGQ&usqp=CAU" alt="" />
                
                    <h2>My First Name<li>{this.state.Personal.fname}</li></h2>
                    <h2>My Last Name<li>{this.state.Personal.lname}</li></h2>
                    <h2>My Profession<li>{this.state.Personal.Profession}</li></h2>
                    <h2>My Height<li>{this.state.Personal.Height}</li></h2>
                
                    <h2> Best Movies of his career=={Object.values(this.state.BestMovies).map((val)=>{
                        return <li>{val}</li>
                    })}</h2>
            
                </div>
                : <h1>😝😝Info Not Available.....😝😝!!!!</h1>
            }
            </div>
        )
    }
}