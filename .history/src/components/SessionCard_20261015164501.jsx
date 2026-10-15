import React from "react";

export default function SessionCard({ session, onOpen, onDelete }) {
  return (
    <article className="session-card">
      <div className="session-card-top">
        <span className="session-icon">↗</span>
        <span className="status-badge">
          {session.status || "Created"}
        </span>
      </div>

      <h3>{session.title}</h3>

      <p className="muted">
        {session.company || "Company not specified"}
      </p>

      <p className="session-description">
        {session.description || "No research objective provided."}
      </p>

      <div className="session-details">
        <span>{session.researchType || "Company Analysis"}</span>
        <span>{session.createdAt || "Recently created"}</span>
      </div>

      <div className="session-actions">
        <button
          type="button"
          className="primary-button"
          onClick={onOpen}
        >
          Open Workspace →
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() => {
            if (
              window.confirm(
                `Delete "${session.title}"? This cannot be undone.`
              )
            ) {
              onDelete?.();
            }
          }}
        >
          Delete
        </button>
      </div>
    </article>
  );
}