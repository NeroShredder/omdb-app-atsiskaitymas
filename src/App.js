import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav';
import About from './components/About';
import Movies from './components/Movies.component';
import Form from './components/Form.component';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Movielist from './components/Movielist';

const API_key ="3164d2ab" /*pradejo luzinet */
const API_key1 ="ea5744ae"

class App extends React.Component {
    constructor() {
        super();
        this.state={
      Title: undefined,
      Year: undefined,
      Runtime: undefined,
      Genre: undefined,
      Director: undefined,
      imdbRating: undefined,
      Plot : undefined,
      error: false,
      Response: undefined
        };
        
    } 
    render () {
        return (
            
        <div className="App">
            <Router>
            <Nav/>
            <Switch>
            <Route path = "/about" component = {About} />
            <Route path = "/movielist" component = {Movielist} />
            
            </Switch>
            </Router>
            <Form loadMovies={this.getMovies} error = {this.state.error}/>
      <h1>Movies search app</h1>
      <Movies Title = {this.state.Title} 
        Year = {this.state.Year}
        Runtime = {this.state.Runtime}
        Genre = {this.state.Genre}
        Director = {this.state.Director}
        imdbRating = {this.state.imdbRating}
        Plot = {this.state.Plot}
        Response = {this.state.Response}
      />
      
  
      </div>
        );
    }

    

getMovies = async (e) => {
    
    e.preventDefault();

    const title =e.target.elements.title.value;

    /* patikrina, ar ne tuscias paieskos laukas */
    if (title) {
  
    const api_call = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_key1}&t=${title}`);

    const response = await api_call.json();

    console.log(response);

    
    this.setState({
        Title: response.Title,
        Year: response.Year,
        Runtime: response.Runtime,
        Genre : response.Genre,
        Director: response.Director,
        imdbRating: response.imdbRating,
        Plot: response.Plot,
        error: false,
        Response: response.Response
        
      });
    }
     
    else {
      this.setState({error : true});
      
    }
    
    
     
};
}



  export default App;