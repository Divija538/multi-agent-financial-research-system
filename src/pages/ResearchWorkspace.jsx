export default function ResearchWorkspace({ session }) {
  if (!session) {
    return (
      <section className="page">
        <p className="eyebrow">WORKSPACE</p>
        <h1>Research Workspace</h1>

        <div className="empty-state">
          <h3>No session selected</h3>
          <p>Create a research session before opening the workspace.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="page">
      <p className="eyebrow">RESEARCH / WORKSPACE</p>
      <h1>{session.title}</h1>
      <p className="muted">
        {session.company || "Company not specified"}
      </p>

      <div className="research-panel">
        <div className="workspace-heading">
          <div>
            <span className="status-badge">Session Created</span>
            <h2>Research Overview</h2>
          </div>

          <div className="session-icon">↗</div>
        </div>

        <div className="detail-grid">
          <div className="detail-item">
            <span>Research Type</span>
            <strong>{session.researchType || "Company Analysis"}</strong>
          </div>

          <div className="detail-item">
            <span>Company / Ticker</span>
            <strong>{session.company || "Not specified"}</strong>
          </div>

          <div className="detail-item">
            <span>Created At</span>
            <strong>{session.createdAt}</strong>
          </div>
        </div>

        <div className="objective-panel">
          <h3>Research Objective</h3>
          <p>
            {session.description ||
              "No research objective has been provided."}
          </p>
        </div>

        <div className="agent-panel">
          <h3>Research Pipeline</h3>

          <div className="pipeline-step">
            <span className="pipeline-number">1</span>
            <div>
              <strong>Session Setup</strong>
              <p>Research session created successfully.</p>
            </div>
            <span className="success-text">Complete</span>
          </div>

          <div className="pipeline-step">
            <span className="pipeline-number">2</span>
            <div>
              <strong>Financial Data Collection</strong>
              <p>Connect a financial data source in the next milestone.</p>
            </div>
            <span className="pending-text">Pending</span>
          </div>

          <div className="pipeline-step">
            <span className="pipeline-number">3</span>
            <div>
              <strong>AI Research and Report</strong>
              <p>Agent orchestration and report generation are not connected yet.</p>
            </div>
            <span className="pending-text">Pending</span>
          </div>
        </div>
      </div>
    </section>
  );
}