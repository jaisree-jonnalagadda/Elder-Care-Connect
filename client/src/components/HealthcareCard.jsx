function HealthcareCard({ hospital }) {
  return (
    <div className="health-card">
      <h2>{hospital.name}</h2>

      <p>
        <strong>Location:</strong> {hospital.location}
      </p>

      <p>
        <strong>Service:</strong> {hospital.service}
      </p>

      <p>{hospital.description}</p>

      <p>
        <strong>Phone:</strong> {hospital.phone}
      </p>

      <button>Contact</button>
    </div>
  );
}

export default HealthcareCard;