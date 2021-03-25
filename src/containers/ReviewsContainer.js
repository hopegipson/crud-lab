import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import { connect } from 'react-redux'


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <label>Submit a review:</label>
          <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} reviews={this.props.reviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews })

const mapDispatchToProps = dispatch => ({
  addReview: (review) => dispatch({ type: "ADD_REVIEW", review}),
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', id })

})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

