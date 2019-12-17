import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// const searchURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>'

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    handleChange = e => {
        if (e.target.value.split('').length > 1) {
            this.setState({
                searchTerm: e.target.value.toLowerCase().replace(/\s/g, '-')
            })
        } else {
            this.setState({
                searchTerm: e.target.value.toLowerCase()
            })
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
        .then(resp=> resp.json())
        .then(reviews => this.setState({
            reviews: reviews.results
        }))
    }

    render() {
        console.log(this.state)
        return(
            < React.Fragment>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Search:</label>
                        <input type='text' value={this.state.searchTerm} placeholder="search" onChange={this.handleChange} />
                        <input type='Submit' value="Find Reviews" />
                    </form>

                </div>
                <div>
                    {this.state.reviews.length > 0 && <h2>Found Movie Reviews!</h2>}
                    < MovieReviews reviews={this.state.reviews} />
                </div>
            </React.Fragment>
            
        )
    }
}