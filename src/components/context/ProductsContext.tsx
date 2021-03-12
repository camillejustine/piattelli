import {Component, createContext} from 'react';
import bag1 from "../../assets/bags/bag-1.png";
import bag2 from "../../assets/bags/bag-2.png";
import bag3 from "../../assets/bags/bag-3.png";
import bag4 from "../../assets/bags/bag-4.png";
import bag5 from "../../assets/bags/bag-5.png";
import bag6 from "../../assets/bags/bag-6.png";

interface iState {
    products: any[]
}
interface ContextValue extends iState {
    productViewDisplay: (product: string) => void;
}

export const ProductsContext = createContext<ContextValue>({
    products: [
        { name: "mickeyBag", price: 100, preview: bag1 },
        { name: "mickeyBag", price: 100, preview: bag2 },
        { name: "mickeyBag", price: 100, preview: bag3 },
        { name: "mickeyBag", price: 100, preview: bag4 },
        { name: "mickeyBag", price: 100, preview: bag5 },
        { name: "mickeyBag", price: 100, preview: bag6 },
        { name: "mickeyBag", price: 100, preview: bag1 },
        { name: "mickeyBag", price: 100, preview: bag2 },
        { name: "mickeyBag", price: 100, preview: bag3 },
        { name: "mickeyBag", price: 100, preview: bag4 },
        { name: "mickeyBag", price: 100, preview: bag5 },
        { name: "mickeyBag", price: 100, preview: bag6 },
      ],
    productViewDisplay: () => {}
})

class ProductContext extends Component<{},iState> {

    state: iState = {
        products: []
    }

    displayInProductView(product: any) {
        const updateProductView = [...this.state.products, product]
        this.setState({products: updateProductView})
    }

    render() {
        console.log(this.state)
        return (
            <ProductsContext.Provider value={{
                products: this.state.products,
                productViewDisplay: this.displayInProductView
            }}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}

export const ProductConsumer = ProductsContext.Consumer
export default ProductContext;