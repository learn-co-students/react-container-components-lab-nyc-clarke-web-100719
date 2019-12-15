// Code MovieReviews Here
import React from 'react'

const Review =(info) =>(
<div key={info.headline} className="review">
<header>
  <a className="review-link" href={info.link.url}>
    {info.headline}
  </a>
  <br/>
  <span className="author">{info.byline}</span>
</header>
<blockquote>{info.summary_short}</blockquote>
</div>)

const MovieReviews = (props) =><div className="review-list">{props.reviews.map(Review)}</div>

export default MovieReviews