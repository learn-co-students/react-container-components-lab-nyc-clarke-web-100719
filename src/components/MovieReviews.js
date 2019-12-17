// Code MovieReviews Here
import React from 'react';
// import MovieReview from './MovieReview';

const MovieReviews = ({reviews}) => {

    const renderArticles = () => {
        return reviews.map(review => {
            return (
                < React.Fragment key={review.display_title} >
                    <li className="review"><strong>{review.byline}</strong> - {review.headline}</li>
                </ React.Fragment>
            )
        })
    }

    return(
        <div className="review-list">
            <ul>
                {renderArticles()}
            </ul> 
        </div>
    )
}

export default MovieReviews;