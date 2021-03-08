import { Component, CSSProperties } from 'react';
import { CartContext } from '../contexts/CartContext';


class Header extends Component {
    // context!: ContextType<typeof CartContext>
    // static contextType = CartContext;

    render() {
        return (
            <CartContext.Consumer>
                {({ cart }) => {
                    console.log('HEADER RENDER');
                    return (
                        <header style={rootStyle}>
                            <h1>Göteborg Match</h1>
                            <div style={{ display: 'flex' }}>
                                <h2>K</h2>
                                <h2>{cart.length}</h2>
                            </div>
                        </header>
                    )
                }}
            </CartContext.Consumer>
        );
    }
}

const rootStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: 'black',
    color: 'white'
}

export default Header;