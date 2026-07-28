function Schemes() {
  return (
    <section className="schemes">

      <h2 className="section-title">
        🏛 Government Welfare Schemes
      </h2>

      <input
        type="text"
        placeholder="🔍 Search Welfare Schemes..."
        className="search-box"
      />

      <div className="scheme-card">
        <h3>YSR Pension Kanuka</h3>

        <p>
          Monthly financial assistance for eligible senior citizens
          in Andhra Pradesh.
        </p>

        <button>Apply Now</button>
      </div>

      <div className="scheme-card">
        <h3>Annapurna Food Scheme</h3>

        <p>
          Food support for senior citizens without regular income.
        </p>

        <button>Apply Now</button>
      </div>

      <div className="scheme-card">
        <h3>Senior Citizen Health Insurance</h3>

        <p>
          Government-supported health insurance benefits for elderly citizens.
        </p>

        <button>Learn More</button>
      </div>

    </section>
  );
}

export default Schemes;