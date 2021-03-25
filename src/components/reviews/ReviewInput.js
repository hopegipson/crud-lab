import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: '',
  restaurantId:  this.props.restaurantId }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
   this.props.addReview(this.state);
    this.setState({
      text: '',
    });
  }

  filterReviews = () => {
    if (this.props.reviews){
    return this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    }
  }
  

  render() {
    return (
      <div>

        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          value={this.state.text}
          onChange={(event) => this.handleOnChange(event)} />
        <input type="submit" />
      </form>
      <Reviews reviews={this.filterReviews()} deleteReview={this.props.deleteReview}/>
    </div>
    );
  }
};

export default ReviewInput;
