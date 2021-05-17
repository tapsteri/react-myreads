import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'


const MainPage = ({ books }) => {
    return (

      
      <div className="list-books">
            <Link to="/search">
              <button>Search</button>
            </Link>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <BookShelf books={books}/>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
      
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
               
                </div>
              </div>
            </div>
          </div>


)}

MainPage.propTypes = {
  books: PropTypes.array
}

export default MainPage