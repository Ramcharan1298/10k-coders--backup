import { Component } from "react";

export class Object4 extends Component{
   constructor(){
    super()
    this.state = {
         Fullname :"Pawan Kalyan",
         Person :{
            fname: "Pawan",
            lname: "Kalyan",
            Surname:"Konidela",
            Profession: "Actor",
            Height: "5.8"
         }
    }
   }
   
    render(){
        return(
            <div className="object">
                <h1>I am {this.state.Fullname}</h1>
                <ul>
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKX6RM5Cu5C1tzNpyFe4G7gtDQXV8OezSTA&usqp=CAU" alt="" />
                    <h2>My First Name is "<li>{this.state.Person.fname}"</li></h2>
                    <h2>My Last Name is "<li>{this.state.Person.lname}"</li></h2>
                    <h2>My SurName is "<li>{this.state.Person.Surname}"</li></h2>
                    <h2>My Profession is "<li>{this.state.Person.Profession}"</li></h2>
                    <h2>My Height is "<li>{this.state.Person.Height}"</li></h2>
                </ul>
            </div>
        )
    }
}