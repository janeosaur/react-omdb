// Developer TODO: Define App component defintion here
import React, { Component } from 'react'

class Search extends Component {

  render() {
    return (
      <div className="Home">

        <form onSubmit={ (e) => this.props.handleSubmitSearch(e) }>
          <input
            onChange={ (e) => this.props.handleInputChange(e) }
            type="text" placeholder="Search Movie Title" value={this.props.query}></input>
          <button type="submit"> Go! </button>
        </form>

      </div>
    );
  }
}

export default Search;
