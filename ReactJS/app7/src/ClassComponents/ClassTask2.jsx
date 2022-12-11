import { Component } from "react";

export  class Object2 extends Component{
   constructor(){
    super()
    this.state = {
         Fullname :"Prabhas",
         Person :{
            fname: "Prabhas",
            lname: "Raju",
            surname:"Uppalapaati",
            Profession: "Actor",
            Height: "6.2"
         }
    }
   }
    render(){
        return(
            <div className="object">
                <h1>I am {this.state.Fullname}</h1>
                <ul>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLgL9t5AwDehwsI1JHWi4xHOQ8RN2RjwEDOQ&usqp=CAU" alt="" />
                    <h2>My First Name is "<li>{this.state.Person.fname}"</li></h2>
                    <h2>My Last Name is "<li>{this.state.Person.lname}"</li></h2>
                    <h2>My Surname is "<li>{this.state.Person.surname}"</li></h2>
                    <h2>My Profession is "<li>{this.state.Person.Profession}"</li></h2>
                    <h2>My Height is "<li>{this.state.Person.Height}"</li></h2>
                </ul>
            </div>
        )
    }
}