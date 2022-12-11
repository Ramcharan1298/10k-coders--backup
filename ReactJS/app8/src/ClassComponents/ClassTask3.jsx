import { Component } from "react";

export class Object3 extends Component{
   constructor(){
    super()
    this.state = {
         Fullname :"Ram Pothineni",
         Person :{
            fname: "Sri",
            lname: "Ram",
            Surname:"Pothineni",
            Profession: "Actor",
            Height: "5.7"
         }
    }
   }
   
    render(){
        return(
            <div className="object">
                <h1>I am {this.state.Fullname}</h1>
                <ul>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2wJgAi0Ao-BYmBz7PFAjQUj3o33QwFEpIw&usqp=CAU" alt="" />
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