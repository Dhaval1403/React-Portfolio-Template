
import React, { Component } from "react";
import PersistentDrawerRight from "./components/Navigation/Navigation";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Experience from "./components/Experience/experience.component";
import "./App.css";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PersistentDrawerRight />
        <ProjectCard />
        <Experience />
        <ProjectCardList />

      </React.Fragment>
    );
  }
}

export default App;