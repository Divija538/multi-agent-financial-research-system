
import { useNavigate } from "react-router-dom";
import SessionCard from "../components/SessionCard";

export default function Dashboard({ sessions }) {
  const navigate = useNavigate();

  const inProgress = sessions.filter(
    (session) => session.status === "In Progress"
  ).length;

  const completed = sessions.filter(
    (session) => session.status === "Completed"
  ).length;

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h1>Research Dashboard</h1>
          <p className="muted">
            Manage your financial research projects from one workspace.
          </p>
        </div>

        <button
          className="button-primary"
          onClick={() => navigate("/create")}
        >
          + Create Research
        </button>
      </div>

      <div className="stats-grid">
        <article className="stat-card">
          <div className="stat-top">
            <span>Total Sessions</span>
            <span className="stat-icon blue">▦</span>
          </div>
          <h2>{sessions.length}</h2>
          <p>All research projects</p>
        </article>

        <article className="stat-card">
          <div className="stat-top">
            <span>In Progress</span>
            <span className="stat-icon orange">◷</span>
          </div>
          <h2>{inProgress}</h2>
          <p>Active research sessions</p>
        </article>

        <article className="stat-card">
          <div className="stat-top">
            <span>Completed</span>
            <span className="stat-icon green">✓</span>
          </div>
          <h2>{completed}</h2>
          <p>Finished sessions</p>
        </article>
      </div>

      <div className="section-heading">
        <div>
          <h2>Recent Research</h2>
          <p className="muted">Your latest research sessions</p>
        </div>

        <button
          className="button-secondary"
          onClick={() => navigate("/sessions")}
        >
          View all →
        </button>
      </div>

      {sessions.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">＋</div>
          <h3>No research sessions yet</h3>
          <p>Create your first session to get started.</p>
          <button
            className="button-primary"
            onClick={() => navigate("/create")}
          >
            Create Your First Session
          </button>
        </div>
      ) : (
        <div className="session-list">
          {sessions.slice(0, 5).map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      )}
    </section>
  );
}
