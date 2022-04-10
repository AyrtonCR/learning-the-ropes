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

function App() {
  return (
    <Router>
      <div className="root-content">
        <div>
          <Header />
          <Navbar />

          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={AboutDementia} />

            <Route
              path="/reducing-the-risk"
              exact
              component={ReducingTheRisk}
            />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/what-is-dementia" exact component={WhatIsDementia} />
            <Route path="./consulting" exact component={SignsOfDementia} />
          </Routes>
          <TripleGrid />
          <Blurb />
        </div>
      </div>
    </Router>
  );
}
export default App;
