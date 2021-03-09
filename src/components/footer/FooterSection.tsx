import { Box, Link, Typography } from "@material-ui/core";
import { CSSProperties } from "react";


function FooterSection() {

    return(
        <Typography>
            <Box style={rootStyle}>
                <h2 style={linkStyling}>Collection</h2>
                <Link style={linkStyling}>The Softy Basic</Link>
                <Link style={linkStyling}>Le Scandinive</Link>
                <Link style={linkStyling}>Mona-Lisa Piattelli</Link>
                <Link style={linkStyling}>Rinacimento</Link>
            </Box>
        </Typography>
    )
}

const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column'
}
 
const linkStyling: CSSProperties = {
    padding: '0.5rem',
    color: '#E5E5E5'
}

export default FooterSection;