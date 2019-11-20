import React, { Component } from "react";
import PersistentDrawerRight from "./components/Navigation/Navigation";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Experience from "./components/Experience/Experience";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PersistentDrawerRight />
        <ProjectCard />
        <Experience />
      </React.Fragment>
    );
  }
}

export default App;
