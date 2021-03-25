import React, { Component } from 'react';
import Restaurant from '../restaurants/Restaurant'

class Restaurants extends Component {

  renderRestaurants = () => this.props.restaurants.map((restaurant) => <Restaurant key={restaurant.id} delete={this.props.delete} restaurant ={restaurant} />) 

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;