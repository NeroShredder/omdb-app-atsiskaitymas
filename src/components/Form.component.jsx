import React from 'react';
import './Form.scss';

const Form = props => {
    return(
        <div className="container">
            <div>{props.error ? error() : null }</div>
            
            <form onSubmit={props.loadMovies}>
            <div className="row">
                <div className="col-md-5 offset-md-3"> 
                    <input type="text" className="form-control" name="title" autoComplete= "off" placeholder="Title"/>
                </div>
                <div className="col-md-4 mt-md-0 py-2 text-md-left">
                    <button className="btn btn-warning">Search Movie</button>
                </div>
            </div>
            </form>
        </div>
    );
}

function error(){
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please enter movie title!
        </div>
    );
}

export default Form;