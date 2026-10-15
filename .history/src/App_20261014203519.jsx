
import { useState } from "react";
import {
  Routes,
  Route,
  NavLink,
  useNavigate,
  useParams,
} from "react-router-dom";

const initialSessions = [
  {
    id: "demo-1",
    title: "Quarterly Financial Analysis",
    company: "Example Corporation",
    objective: "Review financial performance and business risks",
    status: "Draft",
  },
];

function readSessions() {
  try {
    return JSON.parse(localStorage.getItem("researchSessions")) || initialSessions;
  } catch {
    return initialSessions;
  }
}

function Layout({ children }) {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="brand">FinResearch<span>.</span></h2>
        <p className="menu-label">WORKSPACE</p>
        <NavLink to="/" end className="nav-link">
          ▦ Dashboard
        </NavLink>
        <NavLink to="/sessions" className="nav-link">
          ◷ Research Sessions
        </NavLink>
        <NavLink to="/create" className="nav-link">
          + New Research
        </NavLink>
        <div className="sidebar-bottom">Multi-Agent Financial Research</div>
      </aside>
      <main className="main">
        <header className="topbar">
          <span>Financial Research Platform</span>
          <span className="avatar">DR</span>
        </header>
        {children}
      </main>
    </div>
  );
}

function Dashboard({ sessions }) {
  const navigate = useNavigate();

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h1>Research Dashboard</h1>
          <p className="muted">
            Organize your financial research in one workspace.
          </p>
        </div>
        <button onClick={() => navigate("/create")}>
          + Create Research
        </button>
      </div>

      <div className="stats">
        <article className="stat-card">
          <p>Total Sessions</p>
          <h2>{sessions.length}</h2>
        </article>
        <article className="stat-card">
          <p>In Progress</p>
          <h2>{sessions.filter(s => s.status === "In Progress").length}</h2>
        </article>
        <article className="stat-card">
          <p>Drafts</p>
          <h2>{sessions.filter(s => s.status === "Draft").length}</h2>
        </article>
      </div>

      <div className="section-heading">
        <h2>Recent Research</h2>
        <button className="secondary" onClick={() => navigate("/sessions")}>
          View all
        </button>
      </div>

      {sessions.length === 0 ? (
        <div className="empty-state">
          <h3>No research sessions yet</h3>
          <p>Create a session to start organizing your research.</p>
          <button onClick={() => navigate("/create")}>Get Started</button>
        </div>
      ) : (
        <div className="session-list">
          {sessions.slice(0, 5).map(session => (
            <article className="session-card" key={session.id}>
              <div className="session-icon">↗</div>
              <div className="session-info">
                <h3>{session.title}</h3>
                <p>{session.company}</p>
                <span className="status">{session.status}</span>
              </div>
              <button
                className="secondary"
                onClick={() => navigate(`/workspace/${session.id}`)}
              >
                Open →
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function CreateSession({ onCreate }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [objective, setObjective] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !company.trim() || !objective.trim()) return;

    const session = {
      id: crypto.randomUUID(),
      title: title.trim(),
      company: company.trim(),
      objective: objective.trim(),
      status: "Draft",
    };

    onCreate(session);
    navigate(`/workspace/${session.id}`);
  }

  return (
    <section className="page narrow">
      <p className="eyebrow">NEW PROJECT</p>
      <h1>Create Research Session</h1>
      <p className="muted">
        Define the company and objective for your financial research.
      </p>

      <form className="form-card" onSubmit={handleSubmit}>
        <label htmlFor="title">Research title</label>
        <input
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="e.g. Annual Financial Analysis"
          required
        />

        <label htmlFor="company">Company or stock</label>
        <input
          id="company"
          value={company}
          onChange={e => setCompany(e.target.value)}
          placeholder="e.g. Microsoft or MSFT"
          required
        />

        <label htmlFor="objective">Research objective</label>
        <textarea
          id="objective"
          value={objective}
          onChange={e => setObjective(e.target.value)}
          placeholder="What do you want to investigate?"
          rows={5}
          required
        />

        <div className="form-actions">
          <button type="button" className="secondary" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button type="submit">Create Session →</button>
        </div>
      </form>
    </section>
  );
}

function Sessions({ sessions }) {
  const navigate = useNavigate();

  return (
    <section className="page">
      <h1>Research Sessions</h1>
      <p className="muted">All your research projects in one place.</p>
      {sessions.map(session => (
        <article className="session-card" key={session.id}>
          <div className="session-info">
            <h3>{session.title}</h3>
            <p>{session.company}</p>
            <span className="status">{session.status}</span>
          </div>
          <button
            className="secondary"
            onClick={() => navigate(`/workspace/${session.id}`)}
          >
            Open →
          </button>
        </article>
      ))}
    </section>
  );
}

function Workspace({ sessions, onUpdate }) {
  const { id } = useParams();
  const session = sessions.find(s => s.id === id);

  if (!session) {
    return (
      <section className="page">
        <h1>Research session not found</h1>
        <NavLink to="/">Return to dashboard</NavLink>
      </section>
    );
  }

  return (
    <section className="page">
      <p className="eyebrow">RESEARCH WORKSPACE</p>
      <h1>{session.title}</h1>
      <p className="muted">{session.company}</p>

      <div className="workspace-grid">
        <article className="panel">
          <h2>Research Brief</h2>
          <p className="muted">Research objective</p>
          <p>{session.objective}</p>
          <p className="muted">Session status</p>
          <select
            value={session.status}
            onChange={e => onUpdate({ ...session, status: e.target.value })}
          >
            <option>Draft</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </article>

        <article className="panel">
          <h2>Research Activity</h2>
          <p className="muted">
            This area will later display activity from the research agents.
          </p>
          <div className="placeholder">
            <span>◎</span>
            <h3>Research not started</h3>
            <p>Agent execution will be integrated in a future milestone.</p>
          </div>
        </article>

        <article className="panel full-width">
          <h2>Research Findings</h2>
          <p className="muted">
            Financial insights, company analysis, and findings will appear here
            when the research workflow is implemented.
          </p>
        </article>
      </div>
    </section>
  );
}

export default function App() {
  const [sessions, setSessions] = useState(readSessions);

  function saveSessions(nextSessions) {
    setSessions(nextSessions);
    localStorage.setItem("researchSessions", JSON.stringify(nextSessions));
  }

  function createSession(session) {
    saveSessions([session, ...sessions]);
  }

  function updateSession(updated) {
    saveSessions(sessions.map(s => s.id === updated.id ? updated : s));
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard sessions={sessions} />} />
        <Route path="/create" element={<CreateSession onCreate={createSession} />} />
        <Route path="/sessions" element={<Sessions sessions={sessions} />} />
        <Route
          path="/workspace/:id"
          element={<Workspace sessions={sessions} onUpdate={updateSession} />}
        />
      </Routes>
    </Layout>
  );
}
