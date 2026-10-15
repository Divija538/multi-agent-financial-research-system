export default function SessionCard({ session, onOpen }) {
  return (
    <article className="session-card">
      <div className="session-card-top">
        <div className="session-icon">↗</div>
        <span className="status-badge">Created</span>
      </div>

      <h3>{session.title}</h3>

      <p className="session-description">
        {session.description || "Financial research session"}
      </p>

      <div className="session-details">
        <span>{session.company || "General research"}</span>
        <span>{session.createdAt}</span>
      </div>

      <button className="text-button" onClick={onOpen}>
        Open workspace →
      </button>
    </article>
  );
}