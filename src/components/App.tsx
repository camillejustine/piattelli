import { Component } from "react";
import Layout from "./Layout";
import "../overrides.css";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./context/ProductsContext";
import ErrorBoundary from "./ErrorBoundary";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ProductContext>
          <ErrorBoundary>
            <Layout />
          </ErrorBoundary>
        </ProductContext>
      </BrowserRouter>
    );
  }
}

export default App;
