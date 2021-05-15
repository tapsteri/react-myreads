import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  render() {
    return (
      <Router>
        <div classname="app">
          <h1>MyReads</h1>
          <Route exact path='/' render={() => (<MainPage/>)}/>
          <Route path='/search' render={() => (<SearchPage/>)}/>
        </div>
      </Router>
    )
  }
}

export default BooksApp