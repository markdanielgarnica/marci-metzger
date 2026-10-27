export default function PropertySearchSeaction() {
    return (
        <section class="property-search" aria-labelledby="search-title">
            <div class="property-search__inner">
                <div class="property-search__header">
                    <h2 id="search-title">Find Your Dream Home</h2>
                </div>

                <form class="property-search__form" action="#" method="get">

                    <div class="search-field">
                        <label for="location">Location</label>
                        <select id="location" name="location">
                            <option value="">Any </option>
                            <option value="433">Alamo</option>
                            <option value="934">Alton</option>
                            <option value="1026">Amargosa Valley</option>
                            <option value="3118">Beatty</option>
                            <option value="3829">Beryl</option>
                            <option value="4546">Blue Diamond</option>
                            <option value="5088">Boulder City</option>
                            <option value="5521">Brian Head</option>
                            <option value="6719">Cal Nev Ari</option>
                            <option value="6775">Caliente</option>
                            <option value="7784">Cedar City</option>
                            <option value="9571">Cold Creek</option>
                            <option value="11053">Crystal</option>
                            <option value="12869">Duck Creek Village</option>
                            <option value="13129">Dyer</option>
                            <option value="14307">Elko</option>
                            <option value="14562">Ely</option>
                            <option value="18363">Goldfield</option>
                            <option value="18449">Goodsprings</option>
                            <option value="20411">Hatch</option>
                            <option value="20821">Henderson</option>
                            <option value="22539">Indian Springs</option>
                            <option value="23194">Jean</option>
                            <option value="25650">Las Vegas</option>
                            <option value="25702">Laughlin</option>
                            <option value="26990">Logandale</option>
                            <option value="29175">Mc Gill</option>
                            <option value="29860">Mesquite</option>
                            <option value="30650">Moapa</option>
                            <option value="31435">Mount Charleston</option>
                            <option value="31686">Mountain Springs</option>
                            <option value="32217">Nelson</option>
                            <option value="33400">North Las Vegas</option>
                            <option value="33">Other</option>
                            {/* <option value="0">Other</option>
                            <option value="52">Other</option>
                            <option value="6">Other</option>
                            <option value="45">Other</option> */}
                            <option value="34981">Overton</option>
                            <option value="35146">Pahrump</option>
                            <option value="55114">Palm Gardens</option>
                            <option value="35305">Panaca</option>
                            <option value="35603">Parowan</option>
                            <option value="36767">Pioche</option>
                            <option value="40625">Ruth</option>
                            <option value="41421">Sandy Valley</option>
                            <option value="41950">Searchlight</option>
                            <option value="46640">Tonopah</option>
                        </select>
                    </div>

                    <div class="search-field">
                        <label for="property-type">Property type</label>
                        <select id="property-type" name="type">
                            <option value="">Any</option>
                            <option value="7">Land</option>
                            <option value="11">Residential Lease</option>
                            <option value="6">High Rise</option>
                            <option value="1">Residential</option>
                        </select>
                    </div>

                    <div class="search-field">
                        <label for="sort-by">Sort by</label>
                        <select id="sort-by" name="sort">
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="pra">Least Expensive to Most</option>
                            <option value="prd">Most Expensive to Least</option>
                            <option value="bda">Bedrooms (Low to High)</option>
                            <option value="bdd">Bedrooms (High to Low)</option>
                            <option value="tba">Bathrooms (Low to High)</option>
                            <option value="tbd">Bathrooms (High to Low)</option>
                        </select>
                    </div>

                    <div class="search-field">
                        <label for="bedrooms">Bedrooms</label>
                        <select id="bedrooms" name="bedrooms">
                            <option value="">Any number</option>
                            <option value="0">Studio</option>
                            <option value="1">1+</option>
                            <option value="2">2+</option>
                            <option value="3">3+</option>
                            <option value="4">4+</option>
                            <option value="5">5+</option>
                            <option value="6">6+</option>
                        </select>
                    </div>

                    <div class="search-field">
                        <label for="bathrooms">Bathrooms</label>
                        <select id="bathrooms" name="bathrooms">
                            <option value="">Any number</option>
                            <option value="1">1+</option>
                            <option value="2">2+</option>
                            <option value="3">3+</option>
                            <option value="4">4+</option>
                            <option value="5">5+</option>
                            <option value="6">6+</option>
                        </select>
                    </div>

                    <div class="search-field">
                        <label for="min-price">Minimum price ($)</label>
                        <input
                            id="min-price"
                            name="minPrice"
                            type="number"
                            min="0"
                            step="1000"
                            placeholder="No minimum"
                        />
                    </div>

                    <div class="search-field">
                        <label for="max-price">Maximum price ($)</label>
                        <input
                            id="max-price"
                            name="maxPrice"
                            type="number"
                            min="0"
                            step="1000"
                            placeholder="No maximum"
                        />
                    </div>

                    <div class="search-field search-field--button">
                        <button type="submit" class="search-button">
                            <span>Search Now</span>
                            <span class="search-button__arrow" aria-hidden="true">↗</span>
                        </button>
                    </div>

                </form>

                <p class="property-search__note">
                    Need help finding the right property? Get in touch with Marci
                    for personalized guidance.
                </p>

            </div>
        </section>
    );
}