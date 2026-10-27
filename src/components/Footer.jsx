import MarciLogo from '../assets/marci-logo.webp';
export default function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="footer-main">
                    <div class="footer-brand"><a class="brand" href="#home"><img
                        src={MarciLogo}
                        alt="Marci Metzger Homes logo" /><span class="brand-copy"><strong>MARCI METZGER</strong><span>THE RIDGE
                            REALTY GROUP</span></span></a>
                        <p>Thoughtful real estate guidance for your next chapter in Pahrump, Nevada.</p>
                    </div>
                    <div class="footer-links">
                        <div class="footer-col"><strong>Explore</strong><a href="#about">Meet Marci</a><a
                            href="#services">Services</a><a href="#homes">Featured Homes</a><a
                                href="https://marcimetzger.com/listings">All Listings ↗</a></div>
                        <div class="footer-col"><strong>Get in touch</strong><a href="tel:+12069196886">(206) 919-6886</a><span>3190
                            HW-160, Suite F</span><span>Pahrump, Nevada 89048</span></div>
                    </div>
                </div>
                <div class="footer-bottom"><span>© <span>{new Date().getFullYear()}</span> Marci Metzger Homes. All rights
                    reserved.</span><span>Website redesign concept · Original photography retained</span></div>
            </div>
        </footer>
    );
}