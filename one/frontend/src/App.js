import axios from 'axios';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthorList from "./components/Author.js";

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        'authors':[]
    }
}

componentDidMount(){
  const authors = [
    {
      'frirst_name':'Федор',
      'last_name':'Достоевский',
      'birthday_year':1821
    },
    {
      'frirst_name':'Александр',
      'last_name':'Грин',
      'birthday_year':1880
    }
  ]
  axios.get('http://127.0.0.1:8000/api/authors/').then(response => {

  
  this.setState(
    {
      'authors':response.data
    }
  
  )}).catch(error => console.error(error))
   
}
render() {
    return (
      <div>
         < AuthorList authors={this.state.authors}/>
      </div>
    );

  }
}  


export default App;
