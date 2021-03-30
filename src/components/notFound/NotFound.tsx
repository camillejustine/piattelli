import { CSSProperties } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={rootStyle}>
    <h2>404 - Not Found!</h2>
    <Link to="/">
      Go Home
    </Link>
  </div>
);

const rootStyle: CSSProperties = {
    height: "40rem",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '10rem'
}

export default NotFound;