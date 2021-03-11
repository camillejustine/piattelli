import {Component, createContext} from 'react';

interface iState {
    products: any[]
}

interface ContextValue extends iState {
    productViewDisplay: (product: string) => void;
}

export const ProductsContext = createContext<ContextValue>({
    products: [],
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