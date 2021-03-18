import {Component, createContext} from 'react';
import bag1 from "../../assets/bags/bag-1.png";
import bag2 from "../../assets/bags/bag-2.png";
import bag3 from "../../assets/bags/bag-3.png";
import bag4 from "../../assets/bags/bag-4.png";
import bag5 from "../../assets/bags/bag-5.png";
import bag6 from "../../assets/bags/bag-6.png";

interface iState {
    //make interface for objects
    products: any[]
}
interface ContextValue extends iState {
    productViewDisplay: (product: string) => void;
}
class ProductContext extends Component<{},iState> {
    state: iState = {
        products: [],
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

export const ProductsContext = createContext<ContextValue>({
    products: [
        {   
            name: "Dogbag", 
            price: 1200, 
            preview: bag1, 
            collection: "Bug bag",
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "This bag is really soft and if you wash it it will become cleaner, like most fabrics it is hand crafted from non child laborers. If you don't feel like washing this bag you can just rub it gently and it will become clean, it's somekind of new technology"
        },
        { 
            name: "Fishbag", 
            price: 4440, 
            preview: bag2, 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "This bag is really soft and if you wash it it will become cleaner, like most fabrics it is hand crafted from non child laborers. If you don't feel like washing this bag you can just rub it gently and it will become clean, it's somekind of new technology"   
        },
        { 
            name: "Bagbag", 
            price: 12000, 
            preview: bag3,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care:"This bag is really soft and if you wash it it will become cleaner, like most fabrics it is hand crafted from non child laborers. If you don't feel like washing this bag you can just rub it gently and it will become clean, it's somekind of new technology" 
        },
        { 
            name: "Reversebag", 
            price: 1700, 
            preview: bag4,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "This bag is really soft and if you wash it it will become cleaner, like most fabrics it is hand crafted from non child laborers. If you don't feel like washing this bag you can just rub it gently and it will become clean, it's somekind of new technology"    
        },
        { 
            name: "Baggybag", 
            price: 9000, 
            preview: bag5,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "This bag is really soft and if you wash it it will become cleaner, like most fabrics it is hand crafted from non child laborers. If you don't feel like washing this bag you can just rub it gently and it will become clean, it's somekind of new technology"    
        },
        {
            name: "You think you know me?", 
            price: -100, 
            preview: bag6,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "This bag is really soft and if you wash it it will become cleaner, like most fabrics it is hand crafted from non child laborers. If you don't feel like washing this bag you can just rub it gently and it will become clean, it's somekind of new technology"    
        },
        { 
            name: "Nice", 
            price: 6969, 
            preview: bag1,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "This bag is really soft and if you wash it it will become cleaner, like most fabrics it is hand crafted from non child laborers. If you don't feel like washing this bag you can just rub it gently and it will become clean, it's somekind of new technology"    
        },
        { 
            name: "Left", 
            price: 1440, 
            preview: bag2,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "This bag is really soft and if you wash it it will become cleaner, like most fabrics it is hand crafted from non child laborers. If you don't feel like washing this bag you can just rub it gently and it will become clean, it's somekind of new technology"    
        },
        { 
            name: "Just A Bag", 
            price: 1500, 
            preview: bag3,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "This bag is really soft and if you wash it it will become cleaner, like most fabrics it is hand crafted from non child laborers. If you don't feel like washing this bag you can just rub it gently and it will become clean, it's somekind of new technology"    
        },
        { 
            name: "MickeyBag", 
            price: 29000, 
            preview: bag4,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "This bag is really soft and if you wash it it will become cleaner, like most fabrics it is hand crafted from non child laborers. If you don't feel like washing this bag you can just rub it gently and it will become clean, it's somekind of new technology"    
        },
        { 
            name: "Donaldbag", 
            price: 6700, 
            preview: bag5,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "This bag is really soft and if you wash it it will become cleaner, like most fabrics it is hand crafted from non child laborers. If you don't feel like washing this bag you can just rub it gently and it will become clean, it's somekind of new technology"   
        },
        { 
            name: "Klump", 
            price: 9990, 
            preview: bag6,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "This bag is really soft and if you wash it it will become cleaner, like most fabrics it is hand crafted from non child laborers. If you don't feel like washing this bag you can just rub it gently and it will become clean, it's somekind of new technology"    
        }
      ],
    productViewDisplay: () => {}
})

export const ProductConsumer = ProductsContext.Consumer
export default ProductContext;