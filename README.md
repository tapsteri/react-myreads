# MyReads Project

This is the MyReads project for Udacity's React Nanodegree program. App is based on the provided template with static example of CSS and HTML markup.

MyReads is a simple book tracking app where books can be searched and added to one of the three categories: Currently Reading, Want to Read, Read.

## TL;DR

To run the app:

* Install all project dependencies with `npm install`
* Start the server with `npm start`
* Open app in the browser: http://localhost:3000/

## Files
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Book.js # Book component.
    ├── BookShelf.js # Component to print books in one shelf (category).
    ├── BookShelfChanger.js # Dropdown list component for selecting or changing shelf (category) for a book.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── MainPage.js # Component to show three different shelves.
    ├── SearchPage.js # Component for searching books.
    ├── icons # Images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js # Used for DOM rendering only.
```
## Backend Server

App uses backend server running in https://reactnd-books-api.udacity.com for fetching some default books and searching more books from. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
