import React from 'react'
import './App.css'
import Book from './Book'

const BookShelf = ({}) => {
    return (
<div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                       <Book/>
                      </li>
                    </ol>
                  </div>
)}

export default BookShelf