import { Component, createContext } from "react";
import { products } from "./mockedProducts";

export interface Product {
  name: string;
  price: number;
  preview: string;
  collection: string;
  description: string;
  details: string;
  care: string;
  id?: string;
}

interface IState {
  //make interface for objects
  products: Product[];
}
interface ContextValue extends IState {
  productViewDisplay: (product: Product) => void;
}
class ProductContext extends Component<{}, IState> {
  state: IState = {
    products: products,
  };

  componentDidMount() {
    if (!localStorage.hasOwnProperty("products")) {
      localStorage.setItem("products", JSON.stringify(this.state.products));
    }
    let productsLS = JSON.parse(localStorage.getItem("products") || "[]");
    this.setState({ products: productsLS });
  }

  displayInProductView(product: Product) {
    const updateProductView = [...this.state.products, product];
    this.setState({ products: updateProductView });
  }

  render() {
    console.log(this.state);
    return (
      <ProductsContext.Provider
        value={{
          products: this.state.products,
          productViewDisplay: this.displayInProductView,
        }}
      >
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}

export const ProductsContext = createContext<ContextValue>({
  products: [],
  productViewDisplay: () => {},
});

export const ProductConsumer = ProductsContext.Consumer;
export default ProductContext;
