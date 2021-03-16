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
            id: "1",
            name: "Dogbag", 
            price: 12, 
            preview: bag1, 
            collection: "Bug bag",
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        { 
            id: "2",
            name: "fishbag", 
            price: 444, 
            preview: bag2, 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        { 
            id: "3",
            name: "bagbag", 
            price: 123, 
            preview: bag3,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        { 
            id: "4",
            name: "reversebag", 
            price: 120, 
            preview: bag4,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
        },
        { 
            id: "5",
            name: "lol", 
            price: 900, 
            preview: bag5,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
        },
        {
            id: "6",
            name: "You think you know me?", 
            price: -100, 
            preview: bag6,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
        },
        { 
            id: "7",
            name: "Wow", 
            price: 99, 
            preview: bag1,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
        },
        { 
            id: "8",
            name: "left", 
            price: 104, 
            preview: bag2,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
        },
        { 
            id: "9",
            name: "hahaha", 
            price: 102, 
            preview: bag3,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
        },
        { 
            id: "10",
            name: "mickeyBag", 
            price: 17, 
            preview: bag4,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
        },
        { 
            id: "11",
            name: "donaldbag", 
            price: 100, 
            preview: bag5,
            collection: "Bug bag", 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            care: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   
        },
        { 
            id: "12",
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