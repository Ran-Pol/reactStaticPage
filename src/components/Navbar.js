import logo from "../images/logo.svg"
const Navbar = () => {
  return (
    <nav className="navTop">
      <img src={logo} alt="logo" className="nav--logo-img" />
      <h3 className="nav--logo-text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar
