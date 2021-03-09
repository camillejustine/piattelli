import { CSSProperties } from 'react';
import FooterSection from './FooterSection'

function Footer() {
    return(
        <div style={rootStyle}>
            <FooterSection/>
            <FooterSection/>
            <FooterSection/>
            <FooterSection/>
        </div>
    )
}

const rootStyle: CSSProperties = {
    
}
export default Footer;