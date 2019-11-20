import React, { Component } from "react";
import PersistentDrawerRight from "./components/Navigation/Navigation";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import "./App.css";
import Experience from "./components/Experience/experience.component";

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
