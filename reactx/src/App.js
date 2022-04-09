import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import ContactUs from "./components/pages/ContactUs";
import SignUp from "./components/pages/Signup";
import Home from "./components/pages/Home";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";

function App() {
  return (
    <Router>
      <div className="root-content">
        <div>
          <Header />
          <Navbar />

          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/products" exact component={Products} />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/marketing" exact component={Marketing} />
            <Route path="./consulting" exact component={Consulting} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
