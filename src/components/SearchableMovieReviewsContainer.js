import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
`api-key=${NYT_API_KEY}&query=`

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    state={
        searchTerm:'',
        reviews:[]
    }
    handleInput = input => this.setState({searchTerm: input})

    handleSubmit = event =>{
        event.preventDefault()
        fetch(URL + this.state.searchTerm)
            .then(res => res.json())
            .then(json => this.setState({reviews: json.results}))
    }

    render(){
        return (
          <div className="searchable-movie-reviews">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label htmlFor="search-input">Search Movie Reviews</label>
              <input
                id="search-input"
                type="text"
                style={{ width: 300 }}
                onChange={(e) => this.handleInput(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
            {typeof this.state.reviews === 'object' &&
              this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
            <MovieReviews reviews={this.state.reviews} />
          </div>
        )
      }
}