import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class MainPage extends React.Component {
	render() {
		return (
			<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf 
            	currentShelf="currentlyReading"
            	shelfTitle="Currently Reading"
            	books={this.props.books}
            	moveShelf={this.props.moveShelf}
            />
            <BookShelf 
            	currentShelf="wantToRead"
            	shelfTitle="Want to Read"
            	books={this.props.books}
            	moveShelf={this.props.moveShelf}
            />
            <BookShelf 
            	currentShelf="read"
            	shelfTitle="Read"
            	books={this.props.books}
            	moveShelf={this.props.moveShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link
          	to="/search"
          >Add a book</Link>
        </div>
      </div>

		);
	}
}

export default MainPage
