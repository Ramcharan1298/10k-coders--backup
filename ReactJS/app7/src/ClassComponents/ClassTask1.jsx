import { Component } from "react";

export class Object1 extends Component{
   constructor(){
    super()
    this.state = {
         Fullname :"Ram Charan",
         Person :{
            fname: "Ram",
            lname: "Charan",
            Profession: "Actor & Director",
            Height: "6.2"
         }
    }
   }
   
    render(){
        return(
            <div className="object">
                <h1>I am {this.state.Fullname}</h1>
                <ul>
                    <img  src={require('.//ramcharan.jpg')}  alt="" />
                    <h2>My First Name is "<li>{this.state.Person.fname}"</li></h2>
                    <h2>My Last Name is "<li>{this.state.Person.lname}"</li></h2>
                    <h2>My Profession is "<li>{this.state.Person.Profession}"</li></h2>
                    <h2>My Height is "<li>{this.state.Person.Height}"</li></h2>
                </ul>
            </div>
        )
    }
}