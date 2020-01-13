import React from 'react';

import './App.css';
import Movies from './components/Movies.component';


const API_key = "3164d2ab";

class App extends React.component {
  constructor (){
    super();
    this.state = {};
    this.getMovies();
    /*
    this.state = {
      Title : undefined,
      Year : undefined,
      Runtime : undefined,
      Genre : undefined,
      Director : undefined,
      imdbRating : undefined,
      Plot : "",
      

    };
    */
    getMovies = async () => {
    const api_call = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_key}`);

    const response = await api_call.json();

    console.log(response);
      /*
    this.setState({

    });
    }
    */
  };
}
  
  render() {
    return(
      <div className = "App">
      <Movies/>
      </div>
    );
  } 
}

export default App;
