import { Component } from "react";
import Layout from "./Layout";
import "../overrides.css";
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
    )
  }
}

export default App;
