import { useState } from 'react';
import MarciLogo from '../assets/marci-logo.webp';
export default function Header() {
    const [isOpen, setIsopen] = useState(false);

    const closeMenu = () => {
        setIsopen(false);
    }

    return (
        <header>
            <div class="container nav">
                <a class="brand" href="#home" aria-label="Marci Metzger Homes home">
                    <img src={MarciLogo} alt="Marci Metzger Homes logo" />
                    <span class="brand-copy">
                        <strong>MARCI METZGER</strong>
                        <span>THE RIDGE REALTY GROUP</span>
                    </span>
                </a>
                <button
                    class="menu-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                    onClick={() => setIsopen((prev) => !prev)}
                >
                    {isOpen ? "×" : "☰"}
                </button>
                <nav
                    className={`nav-links ${isOpen ? "open" : ""}`}
                    aria-label="Main navigation"
                >
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>Meet Marci</a>
                    <a href="#services" onClick={closeMenu}>Services</a>
                    <a href="#homes" onClick={closeMenu}>Featured Homes</a>
                    <a class="btn"
                        href="https://marcimetzger.com/listings"
                        onClick={closeMenu}
                    >
                        Explore Listings
                        <span class="arrow">↗</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}