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
            name: "mickeyBag", 
            price: 100, 
            preview: bag1, 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "",
            care: ""
        },
        { 
            name: "mickeyBag", 
            price: 100, 
            preview: bag2, 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "",
            care:    
        },
        { 
            name: "mickeyBag", 
            price: 100, 
            preview: bag3, 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "",
            care:    
        },
        { 
            name: "mickeyBag", 
            price: 100, 
            preview: bag4, 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "",
            care:    
        },
        { 
            name: "mickeyBag", 
            price: 100, 
            preview: bag5, 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "",
            care:    
        },
        {
            name: "mickeyBag", 
            price: 100, 
            preview: bag6, 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "",
            care:    
        },
        { 
            name: "mickeyBag", 
            price: 100, 
            preview: bag1, 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "",
            care:    
        },
        { 
            name: "mickeyBag", 
            price: 100, 
            preview: bag2, 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "",
            care:    
        },
        { 
            name: "mickeyBag", 
            price: 100, 
            preview: bag3, 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "",
            care:    
        },
        { 
            name: "mickeyBag", 
            price: 100, 
            preview: bag4, 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "",
            care:    
        },
        { 
            name: "mickeyBag", 
            price: 100, 
            preview: bag5, 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "",
            care:   
        },
        { 
            name: "mickeyBag", 
            price: 100, 
            preview: bag6, 
            description: "With its warm and gentle tone, Blond Beige is one of Lemaire’ Spring-Summer 2021 key color. This theme is presented on a cotton linen blend with a soft twill structure for the women’s, men’s, and unisex wardrobe.For carry-overs, the shade is part of our seasonal colorama with six soft nappa leather accessories", 
            details: "",
            care:    
        },
      ],
    productViewDisplay: () => {}
})

export const ProductConsumer = ProductsContext.Consumer
export default ProductContext;