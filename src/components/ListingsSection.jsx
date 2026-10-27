import Court from '../assets/court.webp';
import HomeExterior from '../assets/home-exterior.webp';
import ResedentialProperty from '../assets/resedential-property.webp';
export default function ListingsSection() {
    return (
        <section class="section listings" id="homes">
            <div class="container">
                <div class="section-head"><div>
                    <div class="eyebrow">A look at local homes</div>
                    <h2>Picture what’s next.</h2>
                </div>
                    <p>For current availability, pricing, and details, visit the full listings page.</p>
                </div>
                <div class="listing-grid">
                    <article class="listing-card">
                        <div class="listing-image">
                            <img src={Court} alt="Property photograph from the original Marci Metzger Homes website" loading="lazy" />
                            <span class="listing-tag">Property gallery</span>
                        </div>
                        <div class="listing-info">
                            <h3>Room to feel at home</h3>
                            <p>Explore property details and availability through the full listings page.</p>
                            <div class="listing-bottom">
                                <span>Marci Metzger Homes</span>
                                <a href="https://marcimetzger.com/listings">View listings ↗</a>
                            </div>
                        </div>
                    </article>
                    <article class="listing-card">
                        <div class="listing-image">
                            <img src={HomeExterior} alt="Home exterior from the original Marci Metzger Homes website" loading="lazy" />
                            <span class="listing-tag">Property gallery</span>
                        </div>
                        <div class="listing-info">
                            <h3>Find your kind of space</h3>
                            <p>From a first home to your next chapter, start with what matters to you.</p>
                            <div class="listing-bottom">
                                <span>Local real estate</span>
                                <a href="https://marcimetzger.com/listings">View listings ↗</a>
                            </div>
                        </div>
                    </article>
                    <article class="listing-card">
                        <div class="listing-image"><img src={ResedentialProperty} alt="Residential property photograph from the original website" loading="lazy" /><span class="listing-tag">Property gallery</span></div><div class="listing-info"><h3>Your next move, considered</h3><p>Get local guidance to help make your next real estate decision clearer.</p><div class="listing-bottom"><span>Buying and selling</span><a href="https://marcimetzger.com/listings">View listings ↗</a></div></div></article></div><div class="listings-foot"><a class="btn" href="https://marcimetzger.com/listings">Browse All Listings <span class="arrow">↗</span></a></div></div></section>
    )
}