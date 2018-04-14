import React, { Component } from "react";
import "./App.css";
import MenuHeader from "../src/components/MenuHeader/MenuHeader";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
// import Resume from "./components/Resume";

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {}
  }

  setMessage(msg){
    this.setState({ message: msg });
  }
  render() {
    return (
      <React.Fragment>
        <MenuHeader />
        <section id="landingpage">
          <LandingPage />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>

        {/*
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          */}
      </React.Fragment>
    );
  }
}

export default App;
