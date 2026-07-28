function Dashboard() {
  return (
    <section className="dashboard">

      <div className="card">
        <h2>🏛 Government Welfare Schemes</h2>
        <p>
          Explore pension schemes, financial assistance,
          food security, housing benefits, and social welfare
          programs for senior citizens.
        </p>

        <button>View Schemes</button>
      </div>

      <div className="card">
        <h2>🏥 Healthcare Services</h2>
        <p>
          Find nearby hospitals, PHCs, ambulance services,
          vaccination drives, health insurance,
          and medical assistance.
        </p>

        <button>Explore Healthcare</button>
      </div>

      <div className="card">
        <h2>🚨 Emergency Support</h2>
        <p>
          Quick access to Ambulance (108),
          Police, Fire Department,
          Women Helpline, and Senior Citizen Helpline.
        </p>

        <button>Emergency Contacts</button>
      </div>

    </section>
  );
}

export default Dashboard;