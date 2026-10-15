import SessionCard from "../components/SessionCard.jsx";

export default function Dashboard({
  sessions,
  setPage,
  setActiveSession
}) {
  return (
    <section className="page">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h1>Research Dashboard</h1>
          <p className="muted">
            Manage financial research sessions from one workspace.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setPage("Create Session")}
        >
          + New Research Session
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Total Sessions</span>
          <strong>{sessions.length}</strong>
          <small>Sessions created</small>
        </div>

        <div className="stat-card">
          <span>Workspace Status</span>
          <strong className="success-text">Ready</strong>
          <small>Frontend is operational</small>
        </div>

        <div className="stat-card">
          <span>AI Research Agents</span>
          <strong>Pending</strong>
          <small>Backend integration required</small>
        </div>
      </div>

      <div className="section-heading">
        <div>
          <h2>Recent Research Sessions</h2>
          <p className="muted">
            Open a session to view its research workspace.
          </p>
        </div>
      </div>

      {sessions.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">⌕</div>
          <h3>No research sessions yet</h3>
          <p>
            Create your first session to begin organizing financial research.
          </p>

          <button
            className="primary-button"
            onClick={() => setPage("Create Session")}
          >
            Create First Session
          </button>
        </div>
      ) : (
        <div className="sessions-grid">
          {sessions.map((session) => (
            <SessionCard
              key={session.id}
              session={session}
              onOpen={() => {
                setActiveSession(session);
                setPage("Research Workspace");
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
import React from "react";
import SessionCard from "../components/SessionCard.jsx";

export default function Dashboard({
  sessions,
  setPage,
  setActiveSession,
  onDeleteSession
}) {
  function openSession(session) {
    setActiveSession(session);
    setPage("Research Workspace");
  }

  return (
    <section className="page">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h1>Research Dashboard</h1>
          <p className="muted">
            Manage financial research sessions from one workspace.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setPage("Create Session")}
        >
          + New Research Session
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Total Sessions</span>
          <strong>{sessions.length}</strong>
          <small>Saved research sessions</small>
        </div>

        <div className="stat-card">
          <span>Workspace Status</span>
          <strong className="success-text">Ready</strong>
          <small>Frontend operational</small>
        </div>

        <div className="stat-card">
          <span>Research Agents</span>
          <strong>Pending</strong>
          <small>Backend integration required</small>
        </div>
      </div>

      <div className="section-heading">
        <div>
          <h2>Recent Research Sessions</h2>
          <p className="muted">
            Select a session to open its workspace.
          </p>
        </div>
      </div>

      {sessions.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">⌕</div>
          <h3>No research sessions yet</h3>
          <p>Create your first session to get started.</p>

          <button
            className="primary-button"
            onClick={() => setPage("Create Session")}
          >
            Create First Session
          </button>
        </div>
      ) : (
        <div className="sessions-grid">
          {sessions.map((session) => (
            <SessionCard
              key={session.id}
              session={session}
              onOpen={() => openSession(session)}
              onDelete={() => onDeleteSession(session.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}