import React from 'react'
import './App.css'
import PropTypes from 'prop-types'

const Book = ({ book }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" 
          style={{ width: 128, height: 193, backgroundImage: 
            `url(${book.imageLinks && book.imageLinks.thumbnail})`}}>
        </div>                     
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors"></div>
    </div>  
)}

Book.propTypes = {
  book: PropTypes.object.isRequired
}

export default Book