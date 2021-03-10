// import { Box } from "@material-ui/core";
import { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';
import alternativeCursor from '../../assets/alternativeCursor.png';
import leScandinave from '../../assets/le-scandinave.png';

function Promotion() {
  return (
    <div style={promotionContainer}>
      <div style={promotionText}>
        <Typography variant="h6">Explore</Typography>
        <Typography variant="h3">LE SCANDINAVE</Typography>
      </div>
      <div>
        <img
          src={leScandinave}
          style={customCursor}
          draggable="false"
          alt="A Le Scandinave promotion."
        />
      </div>
    </div>
  );
}

const promotionContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const promotionText: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'absolute',
  color: 'white',
  cursor: `url(${alternativeCursor}), auto`,
};

const customCursor: CSSProperties = {
  cursor: `url(${alternativeCursor}), auto`,
};
export default Promotion;
