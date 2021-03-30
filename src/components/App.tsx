import { Component } from "react";
import Layout from "./Layout";
import "../overrides.css";
import { BrowserRouter } from 'react-router-dom';
import ProductContext from "./context/ProductsContext";


class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <ProductContext>
        <Layout />
      </ProductContext>
    </BrowserRouter>
    )
  }
}

export default App;
