import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addingmovie, deletingmovie } from './STORE__REDUX/CRUD-Actions';

class User extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <br /><button onClick={this.props.addmovie}>Add Movie</button><br /><br />
                <button onClick={this.props.deletemovie}>Delete Movie</button>
                <ul>
                    {this.props.allmovies && this.props.allmovies.map((user , i)=> <li key={i} onClick={()=>this.props.deletemovie(user)}>{user}</li>)}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        allmovies:state.movies,
    };
}


function mapDispatchToProps(dispatch){
    return {
        addmovie : ()=> dispatch(addingmovie()),
        deletemovie :(user)=> dispatch(deletingmovie(user))
    };
}


// console.log(connect);

export default connect(mapStateToProps , mapDispatchToProps)(User);
