import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import NavbarMobile from "./components/layout/NavbarResponsive/NavbarMobile";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <>
      <header className="header-container">
        <nav className="navbar-desktop">
          <Navbar />
        </nav>
        <nav className="navbar-mobile">
          <NavbarMobile />
        </nav>
      </header>
      <main className="main-container">
        <Home />
      </main>
    </>
  );
}

export default App;
