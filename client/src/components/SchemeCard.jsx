function SchemeCard({ scheme }) {
  return (
    <div className="scheme-card">

      <span className="category">
        {scheme.category}
      </span>

      <h2>{scheme.name}</h2>

      <p>{scheme.description}</p>

      <hr />

      <p>
        <strong>Eligibility</strong><br />
        {scheme.eligibility}
      </p>

      <p>
        <strong>Benefits</strong><br />
        {scheme.benefits}
      </p>

      <p>
        <strong>Required Documents</strong><br />
        {scheme.documents}
      </p>

      <a
        href={scheme.apply}
        target="_blank"
        rel="noreferrer"
      >
        <button>Apply Now</button>
      </a>

    </div>
  );
}

export default SchemeCard;