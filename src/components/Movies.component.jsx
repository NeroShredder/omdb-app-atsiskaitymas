import React from 'react';

const Movies = (props) => {
    return (
        /* response skiltis lenteleje tik patikrinti, ar atsakymas True, ar False, kad butu galima ismest klaida suvedus bloga pavadinima */
         <table class="table table-dark">
             <thead>   
            <tr>
            <th scope="col">#</th>
                <th scope="col">Title</th> 
                <th scope="col">Year</th> 
                <th scope="col">Runtime</th> 
                <th scope="col">Genre:</th> 
                <th scope="col">Director</th> 
                <th scope="col">imdb Rating</th>
                <th scope="col">Description</th>
                <th scope="col">Response</th>  
           </tr>
           </thead>
           <tbody>
           <tr>
                <th scope="row">1</th>
                <td>{props.Title}</td>
                <td>{props.Year}</td>
                <td>{props.Runtime}</td>
                <td>{props.Genre}</td>
                <td>{props.Director}</td>
                <td> {props.imdbRating}</td>
                <td>{props.Plot}</td>
                <td>{props.Response}</td>    
           </tr>
           </tbody>
        </table> 
        

         

         
    );
};



export default Movies;