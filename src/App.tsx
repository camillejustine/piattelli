import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartProvider from './contexts/CartContext';

class App extends Component {
  
  render() {
    console.log('APP RENDER');
    return (
        <CartProvider>
          <div className="App">
            <Header />
            <ProductList />
          </div>
        </CartProvider>
    );
  }
}

export default App;
