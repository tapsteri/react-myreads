import React from 'react'
import './App.css'
import Book from './Book'
import PropTypes from 'prop-types'

const BookShelf = ({ books }) => {

  return (
    <div className="bookshelf-books">
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
)}

BookShelf.propTypes = {
  books: PropTypes.array
}

export default BookShelf