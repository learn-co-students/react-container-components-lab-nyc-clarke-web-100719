import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: "dogs"
    }

    fetchSearch = () => {
        fetch(URL+`&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(data => this.setState({reviews: data.results}))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.fetchSearch()
    }

    componentDidMount() {
        this.fetchSearch()
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input name="searchTerm" value={this.state.searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})}/>
                    <input type="submit" value="Submit"/>
                </form>
                < MovieReviews reviews={ this.state.reviews } />
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer