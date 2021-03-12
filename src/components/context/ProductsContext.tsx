import {Component, createContext} from 'react';
import bag1 from "../../assets/bags/bag-1.png";
import bag2 from "../../assets/bags/bag-2.png";
import bag3 from "../../assets/bags/bag-3.png";
import bag4 from "../../assets/bags/bag-4.png";
import bag5 from "../../assets/bags/bag-5.png";
import bag6 from "../../assets/bags/bag-6.png";

interface iState {
    products: any[]
}
interface ContextValue extends iState {
    productViewDisplay: (product: string) => void;
}
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

export const ProductsContext = createContext<ContextValue>({
    products: [
        {   
            name: "Dogbag", 
            price: 1002222, 
            preview: bag1, 
            collection: "Bug bag",
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        { 
            name: "fishbag", 
            price: 1044440, 
            preview: bag2, 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        { 
            name: "bagbag", 
            price: 12300, 
            preview: bag3,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        { 
            name: "reversebag", 
            price: 102220, 
            preview: bag4,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
        },
        { 
            name: "lol", 
            price: 9000, 
            preview: bag5,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
        },
        {
            name: "You think you know me?", 
            price: -100, 
            preview: bag6,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
        },
        { 
            name: "Wow", 
            price: 1080, 
            preview: bag1,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
        },
        { 
            name: "left", 
            price: 10234, 
            preview: bag2,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
        },
        { 
            name: "hahaha", 
            price: 1020, 
            preview: bag3,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
        },
        { 
            name: "mickeyBag", 
            price: 1, 
            preview: bag4,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
        },
        { 
            name: "donaldbag", 
            price: 10034, 
            preview: bag5,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        { 
            name: "klump", 
            price: 999, 
            preview: bag6,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
        }
      ],
    productViewDisplay: () => {}
})

export const ProductConsumer = ProductsContext.Consumer
export default ProductContext;