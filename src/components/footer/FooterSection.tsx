import { Box, Link, Typography } from '@material-ui/core';
import { CSSProperties } from 'react';

function FooterSection() {
  return (
    <Box>
      <Typography variant="h5" style={textColor}>
        Collection
      </Typography>
      <Typography variant="subtitle2" style={textColor}>
        <Link>The Softy Basic</Link>
        <Link>Le Scandinive</Link>
        <Link>Mona-Lisa Piattelli</Link>
        <Link>Rinacimento</Link>
      </Typography>
    </Box>
  );
}

const textColor: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  lineHeight: '300%',
  color: 'white',
};

export default FooterSection;
