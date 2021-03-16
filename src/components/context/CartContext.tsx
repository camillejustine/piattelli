import {Component, createContext} from 'react';

interface iState {
    cart: any
}
interface ContextValue extends iState {
    addToCart: (product: any) => void;
}

export const CartContext = createContext<ContextValue>({
    cart: [],
    addToCart: () => {}
})
class CartProvider extends Component<{},iState> {
    state: iState = {
        cart: [],
    }

    addProductToCart(product: any) {
        const updateCart = [...this.state.cart, product]
        this.setState({cart: updateCart})
    }

    render() {
        console.log(this.state)
        return (
            <CartContext.Provider value={{
                cart: this.state.cart,
                addToCart: this.addProductToCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}


export const CartConsumer = CartContext.Consumer
export default CartProvider;