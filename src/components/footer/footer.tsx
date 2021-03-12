import { Box, Container, Typography } from "@material-ui/core";
import { CSSProperties } from "react";
import FooterSection from "./FooterSection";

function Footer() {
  return (
    <Container style={containerStyle} maxWidth={false}>
      <Box style={rootStyle}>
        <FooterSection />
        <FooterSection />
        <FooterSection />
        <FooterSection />
      </Box>
      <Typography>
        <Box style={footerLogo}>
          <Typography variant="h4">PIATTELLI</Typography>
        </Box>
      </Typography>
    </Container>
  );
}

const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#333333",
  width: "100%",
};

const rootStyle: CSSProperties = {
  width: "60%",
  display: "flex",
  justifyContent: "space-around",
  padding: "5rem",
};

const footerLogo: CSSProperties = {
  paddingBottom: "2rem",
  color: "#E5E5E5",
};

export default Footer;
