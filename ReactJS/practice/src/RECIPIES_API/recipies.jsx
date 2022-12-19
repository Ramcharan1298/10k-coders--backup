import React, { Component } from 'react';

export default class Recipies extends Component {
    render() {
        return (
            <div>
                <div class="card" style={{height:"1200px",margin:"10px",border:"4px solid black"}}>
                    <img src={this.props.image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h4>{this.props.title}</h4>
                             <p>{this.props.sourceName}</p>
                             <p>{this.props.summary}</p>
                            <a href="#" class="btn btn-warning">Go somewhere</a>
                        </div>
                </div>
            </div>
        );
    }
}


