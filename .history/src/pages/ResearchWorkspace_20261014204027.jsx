
import { Link, useParams } from "react-router-dom";

export default function ResearchWorkspace({ sessions, onUpdate }) {
  const { id } = useParams();

  const session = sessions.find((item) => item.id === id);

  if (!session) {
    return (
      <section className="page">
        <h1>Session not found</h1>
        <p className="muted">
          This session may have been deleted or may no longer exist.
        </p>
        <Link className="text-link" to="/sessions">
          Return to Research Sessions
        </Link>
      </section>
    );
  }

  return (
    <section className="page">
      <Link className="text-link" to="/sessions">
        ← All Research Sessions
      </Link>

      <div className="workspace-heading">
        <div>
          <p className="eyebrow">RESEARCH WORKSPACE</p>
          <h1>{session.title}</h1>
          <p className="muted">
            {session.company} · {session.researchType || "Financial Research"}
          </p>
        </div>

        <div>
          <label className="status-label" htmlFor="session-status">
            Session status
          </label>
          <select
            id="session-status"
            className="status-select"
            value={session.status}
            onChange={(event) =>
              onUpdate({ ...session, status: event.target.value })
            }
          >
            <option>Draft</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      <div className="workspace-grid">
        <article className="panel">
          <div className="panel-heading">
            <span className="panel-icon">◎</span>
            <h2>Research Brief</h2>
          </div>

          <p className="field-label">COMPANY / STOCK</p>
          <p>{session.company}</p>

          <p className="field-label">RESEARCH OBJECTIVE</p>
          <p className="objective-text">{session.objective}</p>

          <p className="field-label">RESEARCH TYPE</p>
          <p>{session.researchType || "Financial Research"}</p>

          <p className="field-label">CREATED ON</p>
          <p>
            {session.createdAt
              ? new Date(session.createdAt).toLocaleDateString()
              : "Sample session"}
          </p>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <span className="panel-icon">◇</span>
            <h2>Agent Activity</h2>
          </div>

          <div className="placeholder">
            <div className="placeholder-icon">◎</div>
            <h3>Agents are not connected</h3>
            <p>
              Research agent execution and activity tracking will be added
              when the backend is integrated.
            </p>
          </div>
        </article>

        <article className="panel full-width">
          <div className="panel-heading">
            <span className="panel-icon">▤</span>
            <h2>Research Findings</h2>
          </div>

          <div className="placeholder">
            <div className="placeholder-icon">⌕</div>
            <h3>No findings available</h3>
            <p>
              Financial insights, supporting evidence, and research
              conclusions will appear here after the research workflow is implemented.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
