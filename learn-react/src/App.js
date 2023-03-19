import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import ShooppingCart from './Components/ShoppingCart';
import About from './Components/About';
import Home from './Components/Home';
import Conatct from './Components/Contact';
import { Route, Routes} from 'react-router-dom';
import Details from './Components/Details';

class App extends Component {
  state = {
    products: [
      { id: 1, name: "Burger", count: 2 },
      { id: 2, name: "Cola", count: 0 },
      { id: 3, name: "Shaowrma", count: 9 },
      { id: 4, name: "Salad", count: 5 },
    ],
  };
  

  handelDelete = (prod) => {
    const products = this.state.products.filter((p) => p.id !== prod.id);
    this.setState({ products });
  };

  handleReset = () => {
    //clone
    let products = [...this.state.products];
    products = products.map((p) => {
      p.count = 0;
      return p;
    });

    this.setState({ products });
  };

  handleIncrease = (product) => {
    //clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //edit

    products[index].count++;

    this.setState({ products });
  };
  render() {
    return (
      <>
        <Navbar
          productCount={this.state.products.filter((p) => p.count > 0).length}
        />
        <Routes>
          <Route
            path="/product/:id/:name?/:test?"
           
            element={<Details products={this.state.products} />}
          />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Conatct} />
          <Route
            path="/cart"
            element={
              <main className="container">
                <ShooppingCart
                  products={this.state.products}
                  onIncrement={this.handleIncrease}
                  onDel={this.handelDelete}
                  onReset={this.handleReset}
                />
              </main>
            }
          />
          <Route path="/" Component={Home} />
        </Routes>
        {/* <main className='container'>
          <ShooppingCart products={this.state.products} onIncrement={this.handleIncrease} onDel={this.handelDelete} onReset={this.handleReset} />
        </main> */}
      </>
    );
  }
}
 
export default App;
