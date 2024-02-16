import "./App.css";
import WhatsappBtn from "./components/common/WhatsappBtn/WhatsappBtn";
import Navbar from "./components/layout/Navbar/Navbar";
import NavbarMobile from "./components/layout/NavbarResponsive/NavbarMobile";
import Home from "./components/pages/Home/Home";
import Footer from "./components/layout/Footer/Footer";

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
        <div className="Wsp-btn">
          <WhatsappBtn />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
