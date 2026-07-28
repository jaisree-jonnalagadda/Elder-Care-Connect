function EmergencyCard({ contact }) {
  return (
    <div className="emergency-card">
      <div className="emergency-icon">{contact.icon}</div>

      <h2>{contact.title}</h2>

      <p>{contact.description}</p>

      <h3>{contact.number}</h3>

      <a href={`tel:${contact.number}`}>
        <button>Call Now</button>
      </a>
    </div>
  );
}

export default EmergencyCard;