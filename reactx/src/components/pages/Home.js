import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import TripleGrid from "../TripleGrid";
import Blurb from "../Blurb";
import Slideshow from "../slider/Slideshow";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Slideshow />
      <div className="margin-adder">
        <TripleGrid />
        <Blurb />
      </div>
    </>
  );
}
