import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreateSession from "./pages/CreateSession.jsx";
import ResearchWorkspace from "./pages/ResearchWorkspace.jsx";

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [sessions, setSessions] = useState([]);
  const [activeSession, setActiveSession] = useState(null);

  function createSession(data) {
    const session = {
      ...data,
      id: Date.now(),
      createdAt: new Date().toLocaleDateString()
    };

    setSessions((previous) => [session, ...previous]);
    setActiveSession(session);
    setActivePage("Research Workspace");
  }

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        setPage={setActivePage}
      />

      <main className="main-content">
        <Header />

        {activePage === "Dashboard" && (
          <Dashboard
            sessions={sessions}
            setPage={setActivePage}
            setActiveSession={setActiveSession}
          />
        )}

        {activePage === "Create Session" && (
          <CreateSession onCreate={createSession} />
        )}

        {activePage === "Research Workspace" && (
          <ResearchWorkspace session={activeSession} />
        )}
      </main>
    </div>
  );
}s