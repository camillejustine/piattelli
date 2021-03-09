import { Grid } from "@material-ui/core";
import Pic from '../../assets/bag.jpg';

const products: {
    name: string;
    price: number;
    preview: string;
}[] = [
    {name: "mickeyBag", price: 100, preview: Pic},
    {name: "mickeyBag", price: 100, preview: Pic},
    {name: "mickeyBag", price: 100, preview: Pic}
]
   
function Catalogue() { 

    return(
        <Grid>
            {products.map((product) => (
                <div>
                    {product.name}   {product.price}
                    <img src={product.preview} alt=' '/>
                </div>
            ))}
        </Grid>
    )
}

export default Catalogue;