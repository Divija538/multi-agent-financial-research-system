import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import CreateSession from "./pages/CreateSession";
import ResearchWorkspace from "./pages/ResearchWorkspace";

import "./index.css";

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [sessions, setSessions] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("finresearch_sessions") || "[]"
      );
    } catch {
      return [];
    }
  });

  const [activeSession, setActiveSession] = useState(null);

  function saveSessions(updatedSessions) {
    setSessions(updatedSessions);
    localStorage.setItem(
      "finresearch_sessions",
      JSON.stringify(updatedSessions)
    );
  }

  function createSession(formData) {
    const session = {
      id: crypto.randomUUID(),
      title: formData.title,
      company: formData.company || "",
      description: formData.description || "",
      researchType: formData.researchType || "Company Analysis",
      status: "Created",
      createdAt: new Date().toLocaleDateString(),
    };

    saveSessions([session, ...sessions]);
    setActiveSession(session);
    setActivePage("Research Workspace");
  }

  function deleteSession(id) {
    saveSessions(sessions.filter((session) => session.id !== id));

    if (activeSession?.id === id) {
      setActiveSession(null);
      setActivePage("Dashboard");
    }
  }

  function navigateTo(page) {
    if (page === "Research Workspace" && !activeSession) {
      if (sessions.length > 0) {
        setActiveSession(sessions[0]);
      } else {
        setActivePage("Create Session");
        return;
      }
    }

    setActivePage(page);
  }

  return (
    <div className="app-layout" data-theme={theme}>
      <Sidebar
        activePage={activePage}
        setPage={navigateTo}
      />

      <main className="main-content">
        <header className="topbar">
          <div>
            <span className="eyebrow">
              FINANCIAL INTELLIGENCE PLATFORM
            </span>
            <h2>Multi-Agent Finance Research System</h2>
          </div>

          <button
            className="profile-button"
            onClick={() => setActivePage("Dashboard")}
            title="Go to Dashboard"
          >
            FR <span>Research Analyst</span>
          </button>
        </header>
        <button
  type="button"
  className="theme-toggle"
  onClick={toggleTheme}
  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
>
  {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>

        {activePage === "Dashboard" && (
          <Dashboard
            sessions={sessions}
            setPage={navigateTo}
            setActiveSession={setActiveSession}
            onDeleteSession={deleteSession}
          />
        )}

        {activePage === "Create Session" && (
          <CreateSession
            onCreateSession={createSession}
            onCancel={() => setActivePage("Dashboard")}
          />
        )}

        {activePage === "Research Workspace" && (
          <ResearchWorkspace
            session={activeSession}
            sessions={sessions}
            setActiveSession={setActiveSession}
            setPage={navigateTo}
          />
        )}
      </main>
    </div>
  );

const [theme, setTheme] = useState(
  () => localStorage.getItem("finresearch_theme") || "dark"
);

function toggleTheme() {
  setTheme((currentTheme) => {
    const nextTheme =
      currentTheme === "dark" ? "light" : "dark";

    localStorage.setItem("finresearch_theme", nextTheme);
    return nextTheme;
  });
}
}