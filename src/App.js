import React, { Component } from "react";
import PersistentDrawerRight from "./components/Navigation/Navigation";
import ProjectCardList from "./components/ProjectCardList/ProjectCardList";
import Experience from "./components/Experience/Experience";
import SkillList from "./components/SkillList/SkillList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PersistentDrawerRight />
        <ProjectCardList />
        <Experience />
        <SkillList />
      </React.Fragment>
    );
  }
}

export default App;
