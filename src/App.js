import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }
 
  render() {
    return (
      <Router>
        <div classname="app">
          <h1>MyReads</h1>
          <Route exact path='/' render={() => (<MainPage books={this.state.books}/>)}/>
          <Route path='/search' render={() => (<SearchPage books={this.state.books}/>)}/>
        </div>
      </Router>
    )
  }
}

export default BooksApp