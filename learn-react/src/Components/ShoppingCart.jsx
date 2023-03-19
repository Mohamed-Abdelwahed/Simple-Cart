import React, { Component } from 'react';
import Product from './Product';



class ShooppingCart extends Component {
  render() {
    return (
      <>
        <h1 className="bg-success text-light p-4">ShooppingCart</h1>
        <button className="btn btn-secondary mx-5" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.products.map((myprod, index) => {
          return (
            <Product
              key={index}
              pr={myprod}

              onDel={this.props.onDel}
              
              onIncreas={this.props.onIncrement}
            />
          );
        })}
      </>
    );
  }
}
 
export default ShooppingCart;