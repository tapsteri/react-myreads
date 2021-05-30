import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'

const Book = ({ book, changeBookShelf, shelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`}}>
        </div>
        <BookShelfChanger book={book} changeBookShelf={changeBookShelf}/> 
      </div>
      <div className="book-title">{book.title}</div>
      { book.authors ? book.authors.map(author => (
        <div className="book-authors" key={author}>{author}</div>
        )) : <div className="book-authors" key="na">Author unknown</div>
      }
    </div>  
)}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired
}

export default Book