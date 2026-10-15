
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateSession({ onCreate }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [objective, setObjective] = useState("");
  const [researchType, setResearchType] = useState("Fundamental Analysis");

  function handleSubmit(event) {
    event.preventDefault();

    const session = {
      id: crypto.randomUUID(),
      title: title.trim(),
      company: company.trim(),
      objective: objective.trim(),
      researchType,
      status: "Draft",
      createdAt: new Date().toISOString(),
    };

    onCreate(session);
    navigate(`/workspace/${session.id}`);
  }

  return (
    <section className="page narrow-page">
      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Back to Dashboard
      </button>

      <p className="eyebrow">NEW PROJECT</p>
      <h1>Create Research Session</h1>
      <p className="muted">
        Define your financial research objectives before entering the workspace.
      </p>

      <form className="form-card" onSubmit={handleSubmit}>
        <div className="form-section-title">
          <span className="step-number">01</span>
          <div>
            <h2>Research Details</h2>
            <p className="muted">Provide the basic project information.</p>
          </div>
        </div>

        <label htmlFor="research-title">Research title *</label>
        <input
          id="research-title"
          type="text"
          placeholder="e.g. Annual Financial Performance Analysis"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
          maxLength={120}
        />

        <label htmlFor="company">Company or stock symbol *</label>
        <input
          id="company"
          type="text"
          placeholder="e.g. Microsoft (MSFT)"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          required
          maxLength={120}
        />

        <label htmlFor="research-type">Research type</label>
        <select
          id="research-type"
          value={researchType}
          onChange={(event) => setResearchType(event.target.value)}
        >
          <option>Fundamental Analysis</option>
          <option>Financial Risk Analysis</option>
          <option>Market Research</option>
          <option>Competitor Analysis</option>
          <option>Investment Research</option>
        </select>

        <label htmlFor="objective">Research objective *</label>
        <textarea
          id="objective"
          placeholder="Describe what you want to investigate, such as revenue growth, profitability, risks, and competitors."
          value={objective}
          onChange={(event) => setObjective(event.target.value)}
          rows={5}
          required
          maxLength={1500}
        />

        <div className="form-note">
          <span>ⓘ</span>
          This creates a research workspace. It does not run financial analysis yet.
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="button-secondary"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>

          <button type="submit" className="button-primary">
            Create Session →
          </button>
        </div>
      </form>
    </section>
  );
}
