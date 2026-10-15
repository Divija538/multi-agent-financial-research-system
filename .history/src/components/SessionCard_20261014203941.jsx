
import { useNavigate } from "react-router-dom";

export default function SessionCard({ session, onDelete }) {
  const navigate = useNavigate();

  return (
    <article className="session-card">
      <div className="session-icon">↗</div>

      <div className="session-info">
        <h3>{session.title}</h3>
        <p>{session.company}</p>
        <span className={`status status-${session.status.toLowerCase().replace(" ", "-")}`}>
          {session.status}
        </span>
      </div>

      <div className="session-actions">
        <button
          className="button-secondary"
          onClick={() => navigate(`/workspace/${session.id}`)}
        >
          Open Workspace →
        </button>

        {onDelete && (
          <button
            className="button-danger"
            onClick={() => onDelete(session.id)}
            aria-label={`Delete ${session.title}`}
            title="Delete session"
          >
            Delete
          </button>
        )}
      </div>
    </article>
  );
}
