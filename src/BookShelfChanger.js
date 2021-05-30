import React from 'react'
import PropTypes from 'prop-types'

const BookShelfChanger = ({ book, changeBookShelf }) => {
  
  const handleChange = (e) => {
    changeBookShelf(book, e.target.value)
  }
  
  return (
    <div className="book-shelf-changer">
       <select value={book.shelf} onChange={handleChange}>
       <option value="move" disabled>Move to...</option>
       <option value="currentlyReading">Currently Reading</option>
       <option value="wantToRead">Want to Read</option>
       <option value="read">Read</option>
       <option value="none">None</option>
       </select>
      </div>
   )
}

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  changeBookShelf: PropTypes.func.isRequired
}

export default BookShelfChanger;