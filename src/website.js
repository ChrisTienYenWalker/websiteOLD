import React from "react";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import "./styles.css";

// base template made of three parts and allows passage for css(only one file of css)
function website() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default website;
