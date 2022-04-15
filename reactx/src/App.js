import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutDementia from "./components/pages/AboutDementia";
import SignUp from "./components/pages/Signup";
import Home from "./components/pages/Home";
import SignsOfDementia from "./components/pages/SignsOfDementia";
import ReducingTheRisk from "./components/pages/ReducingTheRisk.js";
import WhatIsDementia from "./components/pages/WhatIsDementia";
import TripleGrid from "./components/TripleGrid";
import Blurb from "./components/Blurb";
import Slideshow from "./components/Slideshow";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="root-content">
        <div className="header-margin-adder">
          <div className="margin-adder">
            <Header />
          </div>
        </div>
        <Navbar />

        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutDementia} />

          <Route path="/reducing-the-risk" exact component={ReducingTheRisk} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/what-is-dementia" exact component={WhatIsDementia} />
          <Route path="./consulting" exact component={SignsOfDementia} />
        </Routes>
        <Slideshow />
        <div className="margin-adder">
          <TripleGrid />
          <Blurb />
        </div>
        <div className="footer-margin-adder">
          <div className="margin-adder">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
