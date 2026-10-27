export default function Header () {
    return (
        <header>
            <div class="container nav">
                <a class="brand" href="#home" aria-label="Marci Metzger Homes home">
                    <img src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=w:200,h:167,cg:true,m" alt="Marci Metzger Homes logo" />
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