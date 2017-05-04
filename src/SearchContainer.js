// Developer TODO: Define App component defintion here
import React, { Component } from 'react'
import Search from './Search'

class SearchContainer extends Component {
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

        <Search
          query={this.state.query}
          handleSubmitSearch={ (event) => this.onSearchSubmit(event) }
          handleInputChange={ (event) => this.onInputChange(event) }
          />

      </div>
    );
  }
}

export default SearchContainer;
