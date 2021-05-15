import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf'

const MainPage = ({}) => {
    return (
      <div className="list-books">
            <Link to="/search">
              <button>Search</button>
            </Link>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <BookShelf/>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <BookShelf/>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <BookShelf/>
                </div>
              </div>
            </div>
          </div>
)}

export default MainPage