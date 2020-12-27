import React,{Component} from 'react';


class SearchBar extends Component{
    constructor() {
        super();

        this.state = {
           userInput: ''
        }
    }

    handleChange = (input) => {
        this.setState({userInput: input});
    }

    handleClear = () => {
        this.setState({userInput: ''});
        return this.props.reset();
    }
    
    
    render() {
        // console.log(this.state)
        let checkSearch = this.state.userInput
        return (
            <div className="searchBar">
            <input type="text" onChange={ (e) => this.handleChange(e.target.value)} value={this.state.userInput}/>
            <button onClick={ () => this.props.filterBooks(this.state.userInput) }>Search</button>
            {checkSearch ? <button onClick={ () => this.handleClear()}>Clear Search</button> : null}
            </div>
        )
    }
}

export default SearchBar;