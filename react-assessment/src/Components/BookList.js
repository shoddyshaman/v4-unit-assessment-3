import React,{Component} from 'react';
import '../App.css';


class BookList extends Component {
    render() {
        let mappedBooks = this.props.books.map((element,index) => {
            return <section className="book" key={index}>
                <img src={element.img} alt="book-cover" onClick={()=>this.props.addToShelf(element.title)}/><br/>
                <p>{`${element.title} by ${element.author}`}</p>
            </section>
        })
        return (
            <section >
                <div className="book-display" >{mappedBooks}</div>
            </section>
        )
    }
}

export default BookList