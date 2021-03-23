import {Component, createContext} from 'react';
import { Product } from './ProductsContext';

interface CartItem extends Product {
    quantity: number;
}

interface IState {
    cart: CartItem[]
}
interface ContextValue extends IState {
    addToCart: (product: Product) => void;
    removeProductFromCart: (id: any) => void;
    clearCart: () => void;
}

export const CartContext = createContext<ContextValue>({
    cart: [],
    addToCart: () => {},
    removeProductFromCart: () => {},
    clearCart: () => {}
})
class CartProvider extends Component<{},IState> {
    state: IState = {
        cart: [],
    }

    addProductToCart = (product: Product) => {
        const updateCart = [...this.state.cart, { ...product, quantity: 1 }]
        this.setState(prev => { 
            const isItemInCart = prev.cart.find(item => item.name === product.name);
            
            if(isItemInCart) {
               const cart = prev.cart.map((item: any) => 
                    item.name === product.name
                        ? {...item, quantity: item.quantity + 1} 
                        : item           
                ) 
                this.setState({cart})    
            }
            this.setState({cart:updateCart})
        })
    }

    removeProductFromCart = (productName: Product) =>  {
        console.log(productName)
        const cart = this.state.cart.filter((product: Product) => productName.name !== product.name);
        this.setState({cart: cart}) 
    }
    clearCart = () => {
        this.setState({cart: []});
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }

    componentDidMount() {
        let cart = JSON.parse(localStorage.getItem('cart') || "[]");
        this.setState({ cart });
    }

    componentDidUpdate() {
        localStorage.setItem('cart', JSON.stringify(this.state.cart))
    }

    render() {
        console.log(this.state.cart)
        return (
            <CartContext.Provider value={{
                cart: this.state.cart,
                addToCart: this.addProductToCart,
                removeProductFromCart: this.removeProductFromCart,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}


export const CartConsumer = CartContext.Consumer
export default CartProvider;