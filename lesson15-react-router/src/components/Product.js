import React, { Component } from 'react';

class Product extends Component {
  render() {
      const {match} = this.props;
      const name = match.params.slug
    return (
      <div>
       <h1> This Product is : {name.toUpperCase()} </h1>
      </div>
    );
  }
}

export default Product;
