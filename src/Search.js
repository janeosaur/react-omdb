// Developer TODO: Define App component defintion here
import React, { Component } from 'react'

class Search extends Component {
  constructor(){
    super()
    this.state = {
      query: ''
    }
  }

  onSearchSubmit(e) {
    e.preventDefault();
    console.log('search submitted')
  }

  onInputChange(e) {
    console.log('input changed')
    this.setState({
      query: e.target.value
    })
  }

  render() {
    return (
      <div className="Home">

        <form onSubmit={ (e) => this.onSearchSubmit(e) }>
          <input
            onChange={ (e) => this.onInputChange(e) }
            type="text" placeholder="Search Movie Title" value={this.state.query}></input>
          <button type="submit"> Go! </button>
        </form>

      </div>
    );
  }
}

export default Search;
