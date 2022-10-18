import './header.css'
const Header = () => {
  return (
    <div className="section">
      <div className="header-greeting">
        <h4>Howdy, I'm Deandre! &#128512;</h4>
      </div>
      <div className="header-title">
        <h2>Front End Developer</h2>
      </div>
      <div className="header-description">
        <h3>Building digital products from ideas.</h3>
      </div>
      <div className="header-button">
        <button><a href="#contact">Connect with me</a></button>
      </div>
    </div>
  );
};

export default Header;
