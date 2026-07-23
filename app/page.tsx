const cabins = [
  { n: "01", name: "Glass House", meta: "2 guests · private sauna", price: "€390" },
  { n: "02", name: "Pine Shelter", meta: "4 guests · forest deck", price: "€470" },
  { n: "03", name: "Sky Loft", meta: "2 guests · panorama roof", price: "€520" },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav>
          <a className="brand" href="#top"><span>▲</span> AURORA</a>
          <div className="navlinks"><a href="#stays">Stays</a><a href="#story">Story</a></div>
          <a className="book" href="#book">Book your stay ↗</a>
        </nav>
        <div className="eyebrow">68° NORTH · NORWAY</div>
        <div className="hero-copy">
          <h1>Sleep under<br />another sky.</h1>
          <p>Three secluded cabins. Endless Arctic quiet. A front-row seat to the northern lights.</p>
        </div>
        <div className="aurora" aria-hidden="true"><i/><i/><i/></div>
        <div className="weather"><span>Tonight</span><b>−8°</b><small>Clear sky · Aurora likely</small></div>
        <a className="scroll" href="#stays">Explore ↓</a>
      </section>

      <section className="intro" id="story">
        <p className="kicker">A slower kind of travel</p>
        <h2>Nothing between<br />you and the wild.</h2>
        <div className="intro-grid">
          <p>Set deep in the Lyngen Alps, Aurora Stays is an off-grid retreat shaped by silence, snow and Scandinavian restraint.</p>
          <div className="facts"><span><b>03</b> private cabins</span><span><b>24h</b> hosted care</span><span><b>0</b> light pollution</span></div>
        </div>
      </section>

      <section className="stays" id="stays">
        <div className="section-head"><p>Choose your view</p><span>Winter season · Oct—Mar</span></div>
        {cabins.map((c) => (
          <a className="stay" href="#book" key={c.n}>
            <span>{c.n}</span><h3>{c.name}</h3><p>{c.meta}</p><strong>from {c.price}</strong><i>↗</i>
          </a>
        ))}
      </section>

      <section className="cta" id="book">
        <p>Only the sky is busy here.</p>
        <h2>Meet winter<br />at its quietest.</h2>
        <a href="mailto:stay@aurora.example">Check availability ↗</a>
      </section>
      <footer><a className="brand" href="#top"><span>▲</span> AURORA</a><p>Lyngen Alps, Norway</p><p>© 2026 Aurora Stays</p></footer>
    </main>
  );
}
