import { useEffect, useState } from "react";
import API from "../api/api";
import "./Healthcare.css";

function Healthcare() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    API.get("/healthcare")
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="healthcare-page">
      <h1>🏥 Government Healthcare Services</h1>

      <p className="healthcare-subtitle">
        Explore government hospitals, healthcare services, free medical
        facilities, and senior citizen support available in Andhra Pradesh.
      </p>

      <div className="healthcare-container">
        {services.map((service) => (
          <div className="healthcare-card" key={service._id}>
            <div className="healthcare-header">
              <h2>{service.name}</h2>
            </div>

            <p>
              <strong>📍 Location</strong>
            </p>

            <p>{service.location}</p>

            <p>
              <strong>🏥 Services</strong>
            </p>

            <p>{service.services}</p>

            <p>
              <strong>ℹ Description</strong>
            </p>

            <p>{service.description}</p>

            <button className="health-btn">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Healthcare;