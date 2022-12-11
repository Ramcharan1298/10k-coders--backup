import { Component } from "react";

export default class Object4 extends Component{
   constructor(){
    super()
    this.state = {
         Fullname :"Allu Arjun",
         Person :{
            fname: "Arjun",
            // lname: "Raju",
            surname:"Allu",
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PhSf1onQ4jSZ7YQQs2O_3YyHXYOhfp4Egw&usqp=CAU" alt="" />
                    <h2>My First Name is "<li>{this.state.Person.fname}"</li></h2>
                    {/* <h2>My Last Name is "<li>{this.state.Person.lname}"</li></h2> */}
                    <h2>My Surname is "<li>{this.state.Person.surname}"</li></h2>
                    <h2>My Profession is "<li>{this.state.Person.Profession}"</li></h2>
                    <h2>My Height is "<li>{this.state.Person.Height}"</li></h2>
                </ul>
            </div>
        )
    }
}