import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <h1>Empowering Senior Citizens Through Digital Support</h1>

          <h2>
            A Digital Support Platform for Senior Citizens
          </h2>

          <p>
            Access government welfare schemes, healthcare services,
            emergency contacts, and essential information in one
            easy-to-use platform designed for senior citizens.
          </p>

          <div className="hero-buttons">

            <Link to="/welfare" className="primary-btn">
              Explore Welfare Schemes
            </Link>

            <Link to="/healthcare" className="secondary-btn">
              Healthcare Services
            </Link>

          </div>

        </div>
      </section>

      {/* Statistics */}

      <section className="stats">

        <div>
          <h2>100+</h2>
          <p>Government Schemes</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Healthcare Services</p>
        </div>

        <div>
          <h2>24×7</h2>
          <p>Emergency Support</p>
        </div>

        <div>
          <h2>1 Portal</h2>
          <p>Everything in One Place</p>
        </div>

      </section>

      {/* Services */}

      <section className="services-section">

        <h1>Our Services</h1>

        <p className="section-description">
          Elder Care Connect provides senior citizens with quick access
          to essential government services through one digital platform.
        </p>

        <div className="service-grid">

          <div className="service-card">
            <div className="service-icon">🏛️</div>

            <h2>Government Welfare Schemes</h2>

            <p>
              Find pension schemes, financial assistance,
              and welfare programmes available for senior citizens.
            </p>

            <Link to="/welfare" className="primary-btn">
              View Schemes
            </Link>

          </div>

          <div className="service-card">
            <div className="service-icon">🏥</div>

            <h2>Healthcare Services</h2>

            <p>
              Discover government hospitals,
              health camps,
              free medicines,
              and medical support.
            </p>

            <Link to="/healthcare" className="primary-btn">
              View Healthcare
            </Link>

          </div>

          <div className="service-card">
            <div className="service-icon">🚨</div>

            <h2>Emergency Support</h2>

            <p>
              Quick access to ambulance,
              police,
              senior citizen helpline,
              and emergency services.
            </p>

            <Link to="/emergency" className="primary-btn">
              Emergency Help
            </Link>

          </div>

        </div>

      </section>

      {/* Mission */}

      <section className="mission">

        <h1>Our Mission</h1>

        <p>
          Elder Care Connect aims to bridge the gap between senior citizens
          and government services by providing a simple,
          secure,
          and user-friendly platform where elderly citizens can easily
          access welfare schemes,
          healthcare facilities,
          and emergency assistance.
        </p>

      </section>

      {/* Why Choose */}

      <section className="why">

        <h2>Why Choose Elder Care Connect?</h2>

        <div className="why-grid">

          <div>✅ Easy-to-use interface</div>

          <div>✅ Government verified information</div>

          <div>✅ Senior citizen friendly design</div>

          <div>✅ Emergency contacts in one place</div>

          <div>✅ Healthcare information</div>

          <div>✅ Mobile Responsive</div>

        </div>

      </section>

      {/* Government Updates */}

      <section className="updates">

        <h2>Latest Government Updates</h2>

        <div className="update-card">
          📢 YSR Pension Kanuka monthly pension distribution has started.
        </div>

        <div className="update-card">
          🏥 Free Health Check-up Camps are being conducted across Andhra Pradesh.
        </div>

        <div className="update-card">
          💊 Free medicines are available in selected Government Hospitals.
        </div>

      </section>

      {/* Quick Links */}

      <section className="services-section">

        <h1>Quick Links</h1>

        <div className="service-grid">

          <div className="service-card">

            <h2>🏛️ Welfare Schemes</h2>

            <p>Explore all government welfare programmes.</p>

            <Link to="/welfare" className="primary-btn">
              Open
            </Link>

          </div>

          <div className="service-card">

            <h2>🏥 Healthcare</h2>

            <p>Find government healthcare services.</p>

            <Link to="/healthcare" className="primary-btn">
              Open
            </Link>

          </div>

          <div className="service-card">

            <h2>🚨 Emergency</h2>

            <p>Emergency numbers and senior citizen support.</p>

            <Link to="/emergency" className="primary-btn">
              Open
            </Link>

          </div>

          <div className="service-card">

            <h2>📞 Contact</h2>

            <p>Send us your feedback or enquiries.</p>

            <Link to="/contact" className="primary-btn">
              Contact
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;