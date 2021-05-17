import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchPage extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }
  
 render() {
   const { books } = this.props
   
    return (

          <div className="search-books">
                  <Link to="/">
              <button>Back to book list</button>
            </Link>
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
    
       <ol className="books-grid">
    
             <li>
                       { 
           books.map(book => (
             <li key={book.id}>
               <Book book={book}/>
             </li>
           ))}
             </li>
   
      


</ol>
            </div>
          </div>
  )}}

export default SearchPage