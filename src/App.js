import "./App.css";
import Nav from './components/Nav/Nav'
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'



function Container() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default Container;
