import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import NavbarMobile from "./components/layout/NavbarResponsive/NavbarMobile";

function App() {
  return (
    <>
      <header>
        <nav className="navbar-desktop">
          <Navbar />
        </nav>
        <nav className="navbar-mobile">
          <NavbarMobile />
        </nav>
      </header>
    </>
  );
}

export default App;
