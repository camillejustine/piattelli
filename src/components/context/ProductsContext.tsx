import {Component, createContext} from 'react';
import Pic from '../../assets/carouselPH.png';

interface iState {
    products: any[]
}
interface ContextValue extends iState {
    productViewDisplay: (product: string) => void;
}

export const ProductsContext = createContext<ContextValue>({
    products: [
            {name: "mickeyBag", price: 100, preview: Pic},
            {name: "fishbag", price: 100, preview: Pic},
            {name: "mickeyfffBag", price: 100, preview: Pic},
            {name: "mickeasdasdyBag", price: 100, preview: Pic},
            {name: "mickeddsasdasyBag", price: 100, preview: Pic},
            {name: "mickasdasdaseyBag", price: 100, preview: Pic},
            {name: "micksdfsdfeyBag", price: 100, preview: Pic},
            {name: "mickweweeyBag", price: 100, preview: Pic},
            {name: "mickasdasdeyBag", price: 100, preview: Pic},
            {name: "miccvxcvkeyBag", price: 100, preview: Pic},
            {name: "micksdfdeyBag", price: 100, preview: Pic},
            {name: "mickfasdfsdfeyBag", price: 100, preview: Pic}
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