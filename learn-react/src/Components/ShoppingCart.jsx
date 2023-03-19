import React, { Component } from 'react';
import Product from './Product';



class ShooppingCart extends Component {
  render() {
    console.log("Shopping Cart is ==> Rendering");
    const {products , onReset, onDel, onIncrement } = this.props;
    return (
      <>
        <h1 className="bg-success text-light p-4">ShooppingCart</h1>
        <button className="btn btn-secondary mx-5" onClick={onReset}>
          Reset
        </button>
        {products.map((myprod, index) => {
          return (
            <Product
              key={index}
              pr={myprod}

              onDel={onDel}
              
              onIncreas={onIncrement}
            />
          );
        })}
      </>
    );
  }
}
 
export default ShooppingCart;