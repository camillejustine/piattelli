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

interface Props {
    children: any;
}

function CartProvider(props: Props){
    const [cartItems, setCartItems] = useState([] as CartItem[])

    function addProductToCart(product: Product) {
        setCartItems(prev => { 
            const isItemInCart = prev.find(item => item.name === product.name);
            if(isItemInCart) {
               return prev.map((item: any) => 
                    item.name === product.name
                        ? {...item, quantity: item.quantity + 1} 
                        : item           
                )    
            }
            return [...prev, { ...product, quantity: 1 }]
        })
    }

    function removeProductFromCart(productName: Product){
        setCartItems(prev =>
            prev.reduce((ack, item) => {
              if (item.name === productName.name) {
                if (item.quantity === 1) return ack;
                return [...ack, { ...item, quantity: item.quantity - 1 }];
              } else {
                return [...ack, item];
              }
            }, [] as CartItem[])
        );
    }

     function clearCart(){
        setCartItems([]);
        localStorage.setItem('cart', JSON.stringify([]));
    }

    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem('cart') || "[]");
        setCartItems(cart);
    }, []) 

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    })

    /* componentDidMount() {
        let cart = JSON.parse(localStorage.getItem('cart') || "[]");
        this.setState({ cart });
    }

    componentDidUpdate() {
        localStorage.setItem('cart', JSON.stringify(this.state.cart))
    } */

        return (
            <CartContext.Provider value={{
                cart: cartItems,
                addToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart,
                clearCart: clearCart
            }}>
                {props.children}
            </CartContext.Provider>
        )
}


export const CartConsumer = CartContext.Consumer
export default CartProvider;