import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ProductContainers from './containers/ProductContainers'
import MessageContainers from './containers/MessageContainers';
import Footer from './components/Footer';
import CartContainers from './containers/CartContainers';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductContainers />
            <MessageContainers />
            <CartContainers />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
