import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchPage extends React.Component {
  state = {
    searchBookList: [],
    query: ''
  }
  
 searchBooks(query) {
   if(query === '') {
     this.setState({searchBookList: []})
   } else {
     BooksAPI.search(query).then(data => {
       if(data === undefined || data.lenght < 1) {
         this.setState({searchBookList: []})
       } else {
         data.forEach(book => {
           let [shelfBook] = this.props.books.filter(onShelf => onShelf.id === book.id)
           if(shelfBook) {
             book.shelf = shelfBook.shelf
           } else {
             book.shelf = "none"
           }
         })
         this.setState({searchBookList:data})
       }
   })
   }
 } 
  
 updateSearch = (query) => {
   this.setState({query})
   this.searchBooks(query)
 }
  
 render() {
   const { searchBookList, query} = this.state
   
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" 
            value={query} onChange={(e) => this.updateSearch(e.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <li> { query ? 
              searchBookList.map(book => (
                <li key={book.id}>
                  <Book book={book} changeBookShelf={this.props.changeBookShelf} 
                  shelf={book.shelf}/>
                </li>
              )) : <p></p>
              }
            </li>
          </ol>
        </div>
     </div>
)}}


SearchPage.propTypes = {
  books: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired
}

export default SearchPage