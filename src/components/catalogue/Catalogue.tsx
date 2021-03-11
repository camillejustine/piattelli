import { Grid, Box, Typography } from "@material-ui/core";
import { CSSProperties, ContextType, Component } from "react";
import Pic from '../../assets/carouselPH.png';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext'

const products: {
    name: string;
    price: number;
    preview: string;
}[] = [
    {name: "mickeyBag", price: 100, preview: Pic},
    {name: "fishbag", price: 100, preview: Pic},
    {name: "mickeyfffBag", price: 100, preview: Pic},
    {name: "mickeasdasdyBag", price: 100, preview: Pic},
    {name: "mickeddsasdasyBag", price: 100, preview: Pic},
    {name: "mickasdasdaseyBag", price: 100, preview: Pic},
    {name: "micksdfsdfeyBag", price: 100, preview: Pic},
    {name: "mickweweeyBag", price: 100, preview: Pic},
    {name: "mickasdasdeyBag", price: 100, preview: Pic},
    {name: "miccvxcvkeyBag", price: 100, preview: Pic},
    {name: "micksdfdeyBag", price: 100, preview: Pic},
    {name: "mickfasdfsdfeyBag", price: 100, preview: Pic}
]
   
class Catalogue extends Component { 
    context!: ContextType<typeof ProductsContext>
    static contextType = ProductsContext;

    render() {
        console.log(this.context)
        return(
            <div>
                <Grid style={gridWidth}>
                    <Grid container item xs={12} spacing={1} style={innerGridStyle}>
                        {products.map((product: any) => (
                            <Typography>
                                    <Link to={product.name}>
                                        <Box style={boxStyle} onClick={() => this.context.productViewDisplay(product.name)}>
                                            <img src={product.preview} alt=' ' width='400' height='400'/>
                                            <span>{product.name}</span>
                                            <span>{product.price}</span>  
                                        </Box>
                                    </Link>
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const gridWidth: CSSProperties = {
    maxWidth: '1500px',
    margin: 'auto'
}

const innerGridStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const boxStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    padding: '0.5rem'
}

export default Catalogue;

