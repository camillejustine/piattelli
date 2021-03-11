import { Grid, Box, Typography } from "@material-ui/core";
import { CSSProperties, ContextType, Component } from "react";
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext'

interface iProps {
    getProduct: (value: {}) => void;
}
class Catalogue extends Component<iProps> { 

    context!: ContextType<typeof ProductsContext>
    static contextType = ProductsContext;

    render() {
        return(
            <div>
                <Grid style={gridWidth}>
                    <Grid container item xs={12} spacing={1} style={innerGridStyle}>
                        {this.context.products.map((product: any) => (
                            <Link to={product.name}>
                                <Box 
                                    style={boxStyle} 
                                    onClick={() => {
                                        this.props.getProduct(product)
                                    }}
                                    >
                                    <img src={product.preview} 
                                        alt=' ' 
                                        width='400' 
                                        height='400' 
                                    />
                                    <Typography>
                                        <span>{product.name}</span>
                                        <span>{product.price}</span>  
                                    </Typography>
                                </Box>
                            </Link>
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

//send product as prop to layout and then send to productview 