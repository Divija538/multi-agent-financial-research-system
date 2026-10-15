import React, { useState } from "react";
import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreateSession from "./pages/CreateSession.jsx";
import ResearchWorkspace from "./pages/ResearchWorkspace.jsx";

export default function App() {
  const [page, setPage] = useState("Dashboard");
  const [sessions, setSessions] = useState([]);
  const [activeSession, setActiveSession] = useState(null);

  function handleCreateSession(sessionData) {
    const session = {
      ...sessionData,
      id: crypto.randomUUID(),
      createdAt: new Date().toLocaleString()
    };

    setSessions((previous) => [session, ...previous]);
    setActiveSession(session);
    setPage("Research Workspace");
  }

  return (
    <div className="app-layout">
      <Sidebar page={page} setPage={setPage} />

      <main className="main-content">
        <Header />

        {page === "Dashboard" && (
          <Dashboard
            sessions={sessions}
            setPage={setPage}
            setActiveSession={setActiveSession}
          />
        )}

        {page === "Create Session" && (
          <CreateSession onCreate={handleCreateSession} />
        )}

        {page === "Research Workspace" && (
          <ResearchWorkspace session={activeSession} />
        )}
      </main>
    </div>
  );
}