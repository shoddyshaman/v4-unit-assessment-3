import React,{Component} from 'react';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import SearchBar from './Components/SearchBar';
import data from './data'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      books: data,
      shelf: []
    }

    // this.addToShelf = this.addToShelf.bind(this)
  }

  addToShelf = (title) => {
    if(!this.state.shelf.includes(title)){
    this.setState({shelf: [...this.state.shelf, title] })
    }
  }

  clearShelf = () => {
    this.setState({shelf: []})
  }

  filterBooks = (userInput) => {
    userInput = userInput.toLowerCase();
    let books = this.state.books;
    let filteredBooks = [];

    for ( let i = 0; i < books.length; i++ ) {
      if ( books[i].title.toLowerCase().includes(userInput) ||  books[i].author.toLowerCase().includes(userInput)) {
        filteredBooks.push(books[i]);
      }
    }

    this.setState({books: filteredBooks});
  }

  reset = () => {
    this.setState({books: data});
  }

  
  render() {
  return (
    <div className="App">
      <Header />
      <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>
      <section className="App-body">
        <BookList books = {this.state.books} addToShelf={this.addToShelf} />
        <Shelf shelf = {this.state.shelf} clearShelf = {this.clearShelf}/>
      </section>
    </div>
  );
  }
}

export default App;
