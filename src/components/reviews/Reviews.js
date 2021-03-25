import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {


  renderReviews = () => {
    return this.props.reviews.map((review) => 
    <Review key={review.id} deleteReview={this.props.deleteReview} review ={review} />) }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;