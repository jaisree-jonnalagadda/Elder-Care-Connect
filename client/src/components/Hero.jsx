import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <h1>👴 Elder Care Connect</h1>

      <h2>
        Empowering Senior Citizens Through
        Government Services
      </h2>

      <p>
        Access welfare schemes, healthcare,
        emergency services and government portals
        from one place.
      </p>

      <div className="hero-buttons">

        <Link to="/schemes">
          <button className="primary-btn">
            Explore Schemes
          </button>
        </Link>

        <Link to="/emergency">
          <button className="secondary-btn">
            Emergency Help
          </button>
        </Link>

      </div>

    </section>
  );
}

export default Hero;