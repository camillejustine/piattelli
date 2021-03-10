import { Grid, Box, Typography } from "@material-ui/core";
import { CSSProperties } from "react";
import Pic from '../../assets/carouselPH.png';
import { Link } from 'react-router-dom';


//const ProductView = lazy(() =>('./products/ProductView'))

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
   
function Catalogue() { 

    return(
        <div>
            <Grid style={gridWidth}>
                <Grid container item xs={12} spacing={1} style={innerGridStyle}>
                    {products.map((product) => (
                        <Typography>
                                <Link to={product.name}>
                                    <Box style={boxStyle}>
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

const gridWidth: CSSProperties = {
    maxWidth: '1400px',
    margin: 'auto'
}

const innerGridStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
}

const boxStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    padding: '0.5rem'
}

export default Catalogue;

//connect routes to onclick value from catalogue grid. 