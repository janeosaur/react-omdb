// Developer TODO: Define App component defintion here
import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div className="Home">

        <form>
          <input type="text" placeholder="Search Movie Title" value=""></input>
          <button type="submit"> Go! </button>
        </form>

      </div>
    );
  }
}

export default Search;
