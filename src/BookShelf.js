import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const BookShelf = ({ books, changeBookShelf, shelf }) => {

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
       { 
           books.filter(book => book.shelf === shelf).map(book => (
             <li key={book.id}>
                <Book book={book} changeBookShelf={changeBookShelf} shelf={shelf}/>
             </li>  
           ))}
    
      </ol>
    </div>
)}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired
}

export default BookShelf