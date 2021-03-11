import { Grid, Box, Typography } from "@material-ui/core";
import { CSSProperties } from "react";
import Pic from '../../assets/carouselPH.png';

const products: {
    name: string;
    price: number;
    preview: string;
}[] = [
    {name: "mickeyBag", price: 100, preview: Pic},
    {name: "mickeyBag", price: 100, preview: Pic},
    {name: "mickeyBag", price: 100, preview: Pic},
    {name: "mickeyBag", price: 100, preview: Pic},
    {name: "mickeyBag", price: 100, preview: Pic},
    {name: "mickeyBag", price: 100, preview: Pic},
    {name: "mickeyBag", price: 100, preview: Pic},
    {name: "mickeyBag", price: 100, preview: Pic},
    {name: "mickeyBag", price: 100, preview: Pic},
    {name: "mickeyBag", price: 100, preview: Pic},
    {name: "mickeyBag", price: 100, preview: Pic},
    {name: "mickeyBag", price: 100, preview: Pic}
]
   
function Catalogue() { 
    return(
        <Grid style={gridWidth}>
            <Grid container item xs={12} spacing={1} style={innerGridStyle}>
                {products.map((product) => (
                    <Typography>
                        <Box style={boxStyle}>
                            <img src={product.preview} alt=' ' width='400' height='400'/>
                            <span>{product.name}</span>
                            <span>{product.price}</span>  
                        </Box>
                    </Typography>
                ))}
            </Grid>
        </Grid>
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