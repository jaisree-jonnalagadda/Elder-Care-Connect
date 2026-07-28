function ServiceCard({ service }) {
  return (
    <div className="service-card">

      <span className="category">
        {service.category}
      </span>

      <h2>{service.name}</h2>

      <p>{service.description}</p>

      <a
        href={service.website}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Visit Portal</button>
      </a>

    </div>
  );
}

export default ServiceCard;