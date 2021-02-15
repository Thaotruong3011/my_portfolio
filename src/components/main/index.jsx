import React from "react";
import About from "../about";
import Projects from "../Projects";
import Experience from "../exp";
import Work from "../work";

function Main() {
  return (
    <div className="px-5">
      <About />
      <Experience />
      <Work />
      <Projects />
    </div>
  );
}

export default Main;
