import React,{Component} from 'react';


class Shelf extends Component {

    
    render() {
        let mappedTitles = this.props.shelf.map((element, index) =>{
            // console.log(element)
            return  <div key={index}>
                        <p>{`${element}`}</p>
                    </div>
        })
        
        let shelfGreeting = ()=> {
            // console.log(this.props.shelf)
            if(this.props.shelf.length === 0){
                return <div>Click a book to add to the shelf!</div>
            } else{ 
                return <div>This is the way!</div>}
        }
        
        return (
            <section className="shelf">
               <h2> Your Shelf</h2>
               <button onClick={this.props.clearShelf}>Clear Shelf</button>
               <div className='shelfGreeting'>{shelfGreeting()}</div>
               <div>{mappedTitles}</div>
            </section> 
        )
    }
}


export default Shelf;