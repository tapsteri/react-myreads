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
  
  getAll = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
    })
  }
  
  componentDidMount() {
    this.getAll()
  }
  
  changeBookShelf = (book, bookshelf) => {
    BooksAPI.update(book, bookshelf).then((res) => {
      this.getAll()
    })
  }
  
  render() {
    return (
      <Router>
        <div classname="app">
          <h1 className="list-books-title">MyReads</h1>
          <Route exact path='/' render={() => (<MainPage books={this.state.books} changeBookShelf={this.changeBookShelf}/>)}/>
          <Route path='/search' render={() => (<SearchPage books={this.state.books} changeBookShelf={this.changeBookShelf}/>)}/>
        </div>
      </Router>
    )
  }
}

export default BooksApp