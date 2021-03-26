import { Box, Container, Typography, Link, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FooterSection from "./FooterSection";
import { spacing } from "@material-ui/system";

function Footer() {
  const classes = useStyles();
  return (
    <Container className={classes.containerStyle} maxWidth={false}>
      <Hidden only={"xs"}>
        <Box className={classes.rootStyle}>
          <FooterSection />
          <FooterSection />
          <Hidden smDown>
            <FooterSection />
            <FooterSection />
          </Hidden>
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
          <Box className={classes.mobileFooterContent}>
            <Typography variant="subtitle2">
              <Box>
                <Link>Collections</Link>
              </Box>
              <br />
              <Box>
                <Link>Help</Link>
              </Box>
            </Typography>
          </Box>
          <Box className={classes.mobileFooterContent}>
            <Typography variant="subtitle2">
              <Box>
                <Link>Company</Link>
              </Box>
              <br />
              <Box>
                <Link>Follow Us</Link>
              </Box>
            </Typography>
          </Box>
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
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  mobileFooterContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
}));

export default Footer;
