import { useState } from "react";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";

function GovernmentServices() {

  const [search, setSearch] = useState("");

  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(search.toLowerCase()) ||
      service.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="services-page">

      <h1 className="page-title">
        Government Services
      </h1>

      <p className="page-description">
        Access essential government portals for identity services,
        pensions, documents, and citizen services.
      </p>

      <input
        className="search-box"
        type="text"
        placeholder="Search services..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p className="result-count">
        Showing {filteredServices.length} Service(s)
      </p>

      <div className="service-grid">
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>

    </div>
  );
}

export default GovernmentServices;