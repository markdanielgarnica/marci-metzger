import MarciLogo from '../assets/marci-logo.webp';
export default function Header() {
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
                <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
                <nav class="nav-links" aria-label="Main navigation">
                    <a href="#home">Home</a>
                    <a href="#about">Meet Marci</a>
                    <a href="#services">Services</a>
                    <a href="#homes">Featured Homes</a>
                    <a class="btn" href="https://marcimetzger.com/listings">
                        Explore Listings
                        <span class="arrow">↗</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}