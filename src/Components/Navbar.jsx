import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);

  };


  return (
    <nav>
     <a href="#home" className="logo">Dolly's Boutique</a>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#collections">Collections</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#collections" className="shop-btn">
        Shop Now
      </a>

                {/* Mobile Menu Button */}
     
     <button 
     className="menu-button"
     onClick={() => setMenuOpen(!menuOpen)}
     aria-label="Toggle navigation menu"
     >
      {menuOpen ? "✕" : "☰"}
     </button>
           
            {/* Mobile Navigation */}


            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
              <a href="#home" onClick={closeMenu}>Home</a>
               <a href="#collections" onClick={closeMenu}>Collections</a>
                <a href="#about" onClick={closeMenu}>About</a>
                 <a href="#services" onClick={closeMenu}>Services</a>
                  <a href="#contact" onClick={closeMenu}>Contact</a>
           
           <a href="#collections" className="mobile-shop-button"
           onClick={closeMenu}>Shop Now</a>
           
            </div>

    </nav>
  );
}

export default Navbar;