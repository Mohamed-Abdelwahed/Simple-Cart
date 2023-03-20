import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import ShooppingCart from './Components/ShoppingCart';
import About from './Components/About';
import Home from './Components/Home';
import Conatct from './Components/Contact';
import Team from './Components/Team';
import Company from './Components/Company';
import { Route, Routes ,Navigate } from 'react-router-dom';
import Details from './Components/Details';
import NotFound from './Components/NotFound';
import Menu from './Components/Menu';


class App extends Component {
  state = {
    products: [
      { id: 1, name: "Burger", count: 1, price: 15, isInCart: false },
      { id: 2, name: "Cola", count: 1, price: 52, isInCart: false },
      { id: 3, name: "Shaowrma", count: 1, price: 16, isInCart: false },
      { id: 4, name: "Salad", count: 1, price: 20, isInCart: false },
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


  handelInCartChange = product =>{
    const products = [...this.state.products]
    const index = products.indexOf(product)
    products[index] = {...products[index]}

    products[index].isInCart = !products[index].isInCart
    this.setState({products})
  }
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
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="company" element={<Company />} />
          </Route>
          <Route path="/contact" Component={Conatct} />
          <Route
            path="/cart"
            element={
              <main className="container">
                <ShooppingCart
                  products={this.state.products.filter(p=>p.isInCart)}
                  onIncrement={this.handleIncrease}
                  onDel={this.handelInCartChange}
                  onReset={this.handleReset}
                />
              </main>
            }
          />
          <Route
            path="/menu"
            element={
              <Menu
                allProducts={this.state.products}
                onClick={this.handelInCartChange}
              />
            }
          />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/" exact Component={Home} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
        {/* <main className='container'>
          <ShooppingCart products={this.state.products} onIncrement={this.handleIncrease} onDel={this.handelDelete} onReset={this.handleReset} />
        </main> */}
      </>
    );
  }
}
 
export default App;
