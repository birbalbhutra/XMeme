import React from "react";

import Header from "./components/Header/Header";
import Contribute from "./components/Contribute/Contribute";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div>
        <Header />
        <Contribute />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default App;
