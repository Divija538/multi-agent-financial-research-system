import { useState } from "react";

export default function CreateSession({ onCreate }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [researchType, setResearchType] = useState("Company Analysis");

  function handleSubmit(event) {
    event.preventDefault();

    onCreate({
      title: title.trim(),
      company: company.trim(),
      description: description.trim(),
      researchType
    });
  }

  return (
    <section className="page">
      <p className="eyebrow">WORKSPACE / CREATE</p>
      <h1>Create Research Session</h1>
      <p className="muted">
        Define the company and objective for your research.
      </p>

      <form className="form-card" onSubmit={handleSubmit}>
        <label htmlFor="title">Session Name *</label>
        <input
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="e.g. Quarterly Financial Analysis"
          required
          maxLength={100}
        />

        <label htmlFor="company">Company Name or Ticker</label>
        <input
          id="company"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          placeholder="e.g. Microsoft or MSFT"
        />

        <label htmlFor="researchType">Research Type</label>
        <select
          id="researchType"
          value={researchType}
          onChange={(event) => setResearchType(event.target.value)}
        >
          <option>Company Analysis</option>
          <option>Financial Statement Analysis</option>
          <option>Market Research</option>
          <option>Investment Research</option>
          <option>Competitor Analysis</option>
        </select>

        <label htmlFor="description">Research Objective</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Describe the financial questions you want to investigate..."
          rows={5}
        />

        <div className="form-actions">
          <button
            type="button"
            className="secondary-button"
            onClick={() => {
              setTitle("");
              setCompany("");
              setDescription("");
              setResearchType("Company Analysis");
            }}
          >
            Clear Form
          </button>

          <button type="submit" className="primary-button">
            Create Session →
          </button>
        </div>
      </form>
    </section>
  );
}