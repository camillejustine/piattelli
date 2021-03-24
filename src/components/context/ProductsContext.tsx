import { Component, createContext, useEffect, useState } from "react";
import { productsMocked } from "./mockedProducts";

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
  products: Product[];
}

interface IProps {
  children: Object;
}
interface ContextValue extends IState {
  addNewProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
}
function ProductContext(props: IProps) {
  const [products, setProducts] = useState(productsMocked);

  useEffect(() => {
    if (!localStorage.hasOwnProperty("products")) {
      localStorage.setItem("products", JSON.stringify(products));
    }
    let productsLS = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(productsLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  });

  function addNewProduct(product: Product) {
    const updateProductView = [...products, product];
    setProducts(updateProductView);
    console.log(product);
  }

  function updateProduct(product: Product) {
    console.log(product);
  }

  function removeProduct(product: Product) {
    console.log(product);
  }

  return (
    <ProductsContext.Provider
      value={{
        products: products,
        addNewProduct: addNewProduct,
        updateProduct: updateProduct,
        removeProduct: removeProduct,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}

export const ProductsContext = createContext<ContextValue>({
  products: [],
  addNewProduct: () => {},
  updateProduct: () => {},
  removeProduct: () => {},
});

export const ProductConsumer = ProductsContext.Consumer;
export default ProductContext;
