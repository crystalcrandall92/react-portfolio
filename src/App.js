import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <NavTabs />
        <Route exact path="/About" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
