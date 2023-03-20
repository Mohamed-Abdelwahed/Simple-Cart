import React, { Component } from 'react';
import Cart from './Cart';


class Menu  extends Component {
    state ={
        shoppingProduct:{}
    }
    addToShoppingCart(prod){
        this.setState({shoppingProduct : { ...prod}})
        console.log(this.state.shoppingProduct);

    }
    render(){
      return (
        <>
          <h1 className="bg-warning text-light text-center">Menu</h1>
          <table className="table container">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.props.allProducts.map((ele, index) => {
                return (
 
                    <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{ele.name}</td>
                    <td>{ele.price}</td>
                    <td>
                        <Cart onClick={this.props.onClick} product={ele} />
                    </td>
                    </tr>
                )
              })}
            </tbody>
          </table>
        </>
      );
    }
}


export default Menu;
