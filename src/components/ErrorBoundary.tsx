import { Box, Typography } from "@material-ui/core";
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { CSSProperties } from "react";
class ErrorBoundary extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box>
          <Header />
          <Box style={errorContainer}>
            <Typography variant="h3">Sorry! Something went wrong.</Typography>
          </Box>
          <Footer />
        </Box>
      );
    }

    return this.props.children;
  }
}
const errorContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "10rem",
  height: "100vh",
};

export default ErrorBoundary;
