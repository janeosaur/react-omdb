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

  render() {
    return (
      <div className="Home">

        <form onSubmit={ (e) => this.onSearchSubmit(e)}>
          <input type="text" placeholder="Search Movie Title" value=""></input>
          <button type="submit"> Go! </button>
        </form>

      </div>
    );
  }
}

export default Search;
