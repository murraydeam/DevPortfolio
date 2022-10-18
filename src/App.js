import "./App.css";
import Nav from './components/Nav/Nav'
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function Container() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Home />
    </div>
  );
}

export default Container;
