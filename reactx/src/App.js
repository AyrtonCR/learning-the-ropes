import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="root-content">
      <div className="header-mod">
        <>
          <Header />
          <Navbar />
        </>
      </div>
    </div>
  );
}
export default App;
