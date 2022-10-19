import "./App.css";
import Nav from './components/Nav/Nav'
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from './components/Projects/Projects'

function Container() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Home />
      <Projects />
    </div>
  );
}

export default Container;
