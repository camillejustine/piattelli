// import { CSSProperties } from 'react';
import { Typography, Box, Button, makeStyles } from '@material-ui/core';
import ImgTest from '../../assets/hero2.png';

const productTitle: {
  name: string;
  collectionName: string;
  price: number;
}[] = [{ name: 'Name', collectionName: 'Collection Name', price: 200 }];

// do we need to make a method of this
// cause these are description titles
const productDetails: {
  desc: string;
  details: string;
  fabricCare: string;
}[] = [{ desc: 'hello', details: 'hello', fabricCare: 'hello' }];

// we should use pexels api here?
// const productImg: {
//     img: string;
// }[] = [
//     {img: 'url()'}
// ]

interface iProps {
  productView: any;
}

function ProductDetails(props: iProps) {
  const classes = useStyles();
  console.log(props)
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.productWrapper}>
        <img src={ImgTest} alt="" width="600" height="750" />
        <img src={ImgTest} alt="" width="600" height="750" />
        <img src={ImgTest} alt="" width="600" height="750" />
      </Box>

      <Box className={classes.infoWrapper}>
        <Box>
          {productTitle.map((product) => (
            <Box className={classes.column}>
              <Typography>{product.name}</Typography>
              <Typography>{product.collectionName}</Typography>
              <Typography>{product.price}</Typography>
            </Box>
          ))}

          {productDetails.map((product) => (
            <Box className={classes.row}>
              <Typography>{product.desc}</Typography>
              <Typography>{product.details}</Typography>
              <Typography>{product.fabricCare}</Typography>
            </Box>
          ))}
        </Box>

        <Box className={classes.row}>
          <Box className={classes.circle}></Box>
          <Box className={classes.circle}></Box>
          <Box className={classes.circle}></Box>
        </Box>

        <Button className={classes.button}>
          <Typography variant="button">Add to cart</Typography>
        </Button>
      </Box>
    </Box>
  );
}

const useStyles: any = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '10rem',
  },
  productWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'purple',
    width: '25rem',
    height: '50rem',
  },
  button: {
    height: '4rem',
    width: '8rem',
    border: 'solid 1.5px black',
    borderRadius: '0%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  circle: {
    height: '2rem',
    width: '2rem',
    borderRadius: '50%',
    border: 'solid 1px white',
    backgroundColor: 'black',
  },
});

export default ProductDetails;
