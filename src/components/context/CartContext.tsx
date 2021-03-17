import {Component, createContext} from 'react';

interface iState {
    cart: any
}
interface ContextValue extends iState {
    addToCart: (product: any) => void;
    removeProductFromCart: () => void;
}

export const CartContext = createContext<ContextValue>({
    cart: [],
    addToCart: () => {},
    removeProductFromCart: () => {}
})
class CartProvider extends Component<{},iState> {
    state: iState = {
        cart: [],
    }

    addProductToCart = (product: any) => {
        const updateCart = [...this.state.cart, product]
        this.setState({cart: updateCart})
    }

    removeProductFromCart() {
        console.log('test')
    }

    /* removeProductFromCart(id: any) {
        cart = carts.filter((item: any) => item.uniqueId !== id);
        localStorage.setItem('cart', JSON.stringify(cart))
    } */

    componentDidMount() {
        let cart = JSON.parse(localStorage.getItem('cart') || "[]");
        this.setState({ cart });
    }

    componentDidUpdate() {
        localStorage.setItem('cart', JSON.stringify(this.state.cart))
    }

    render() {
        return (
            <CartContext.Provider value={{
                cart: this.state.cart,
                addToCart: this.addProductToCart,
                removeProductFromCart: this.removeProductFromCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}


export const CartConsumer = CartContext.Consumer
export default CartProvider;