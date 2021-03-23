import {Component, createContext, useEffect, useState} from 'react';
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
function CartProvider(){
    const [cartItems, setCartItems] = useState([] as CartItem[])

    /* state: IState = {
        cart: [],
    }
 */
    function addProductToCartproduct: Product) {
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

    function removeProductFromCart(productName: Product){
        const cart = cartItems.filter((product: Product) => productName.name !== product.name);
        setCartItems(cart) 
    }
     function clearCart(){
        setCartItems([]);
        localStorage.setItem('cart', JSON.stringify([]));
    }

    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem('cart') || "[]");
        setCartItems(cart);
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }) 

    /* componentDidMount() {
        
    }

    componentDidUpdate() {
        
    } */

        return (
            <CartContext.Provider value={{
                cart: cartItems,
                addToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart,
                clearCart: clearCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
}


export const CartConsumer = CartContext.Consumer
export default CartProvider;