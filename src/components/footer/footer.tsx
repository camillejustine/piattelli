import { Box, Container, Typography, Link, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FooterSection from "./FooterSection";
import { spacing } from "@material-ui/system";

function Footer() {
  const classes = useStyles();
  return (
    <Container className={classes.containerStyle} maxWidth={false}>
      <Hidden smDown>
        <Box className={classes.rootStyle}>
          <FooterSection />
          <FooterSection />
          <FooterSection />
          <FooterSection />
        </Box>
      </Hidden>
      <Link href="/admin">
        <Typography>Secret</Typography>
      </Link>
      <Typography>
        <Box className={classes.footerLogo}>
          <Typography variant="h4">PIATTELLI</Typography>
        </Box>
      </Typography>
      <Hidden smUp>
        <Box className={classes.mobileFooterContainer}>
          <Typography variant="subtitle2" className={classes.textColor}>
            <Box pb={8} className={classes.mobileFooterContent}>
              <Link>Collections</Link>
              <Link>Help</Link>
            </Box>
            <Box className={classes.mobileFooterContent}>
              <Link>Company</Link>
              <Link>Follow Us</Link>
            </Box>
          </Typography>
        </Box>
      </Hidden>
    </Container>
  );
}
const useStyles: any = makeStyles((theme) => ({
  containerStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#333333",
    width: "100%",
  },
  rootStyle: {
    width: "60%",
    display: "flex",
    justifyContent: "space-around",
    padding: "5rem",
  },
  footerLogo: {
    paddingBottom: "2rem",
    color: "#E5E5E5",
  },
  mobileFooterContainer: {
    width: "100%",
    height: "10rem",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  mobileFooterContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default Footer;
