import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }

    fetchMovies = () => {
        fetch(URL)
            .then(resp => resp.json())
            .then(data => this.setState({ reviews: data.results}))
    }

    componentDidMount() {
        this.fetchMovies()
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>Latest Movie Reviews</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer