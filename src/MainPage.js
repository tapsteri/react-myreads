import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'


const MainPage = ({ books, changeBookShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <BookShelf books={books} changeBookShelf={changeBookShelf} shelf={"currentlyReading"}/>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <BookShelf books={books} changeBookShelf={changeBookShelf} shelf={"wantToRead"}/>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <BookShelf books={books} changeBookShelf={changeBookShelf} shelf={"read"}/>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search"></Link>
      </div>
    </div>
)}

MainPage.propTypes = {
  books: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired
}

export default MainPage