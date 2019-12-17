// Code MovieReviews Here
import React from 'react'


const MovieReviews = (props) => {
    return (
        <div className="review-list">
            {
                props.reviews.map(movie => {
                    return (<div className="review" key={movie.display_title}>
                        <h4>{ movie.headline }</h4>
                        <h5>By { movie.byline}</h5>
                        <p>{movie.summary_short}</p>
                    </div>)
                })
            }
        </div>
    )
}

export default MovieReviews