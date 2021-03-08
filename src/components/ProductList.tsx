import { Component, ContextType, CSSProperties } from 'react';
import { CartContext } from '../contexts/CartContext';

const products = [
    'Rapé Portion',
    'Ettan Lös',
    'Prima Fint',
    'Lyft Cool Mint',
    'Lundgrens'
];

class ProductList extends Component {
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;

    render() {
        console.log('PL RENDER');
        const { addToCart } = this.context;
        return (
            <div style={rootStyle}>
                {products.map(product => (
                    <p onClick={() => addToCart(product)}>
                        {product}
                    </p>
                ))}
            </div>
        );
    }
}

const rootStyle: CSSProperties = {
    padding: '1rem',
    cursor: 'pointer'
}

export default ProductList;