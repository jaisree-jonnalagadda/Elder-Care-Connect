import { useEffect, useState } from "react";
import API from "../api/api";
import "./WelfareSchemes.css";

function WelfareSchemes() {
  const [schemes, setSchemes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.get("/welfare")
      .then((res) => setSchemes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredSchemes = schemes.filter((scheme) =>
    scheme.schemeName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="welfare-page">

      <div className="welfare-header">
        <h1>🏛️ Government Welfare Schemes</h1>

        <p>
          Find government welfare programmes, pension schemes and financial
          assistance available for senior citizens in Andhra Pradesh.
        </p>

        <input
          type="text"
          placeholder="🔍 Search Welfare Scheme..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />
      </div>

      <div className="scheme-grid">

        {filteredSchemes.map((scheme) => (

          <div className="scheme-card" key={scheme._id}>

            <div className="scheme-top">

              <div>

                <h2>{scheme.schemeName}</h2>

                <span className="category">
                  {scheme.category}
                </span>

              </div>

              <div className="gov-icon">
                🏛️
              </div>

            </div>

            <div className="scheme-body">

              <h4>Eligibility</h4>

              <p>{scheme.eligibility}</p>

              <h4>Benefits</h4>

              <p>{scheme.benefits}</p>

            </div>

            <a
              href={scheme.applyLink}
              target="_blank"
              rel="noreferrer"
              className="apply-btn"
            >
              Apply Now →
            </a>

          </div>

        ))}

      </div>

    </div>
  );
}

export default WelfareSchemes;