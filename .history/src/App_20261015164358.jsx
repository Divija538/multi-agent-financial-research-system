import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreateSession from "./pages/CreateSession.jsx";
import ResearchWorkspace from "./pages/ResearchWorkspace.jsx";

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const [sessions, setSessions] = useState(() =>
    readStorage("finresearch_sessions", [])
  );

  const [activeSession, setActiveSession] = useState(() =>
    readStorage("finresearch_active_session", null)
  );

  const [user, setUser] = useState(() =>
    readStorage("finresearch_user", null)
  );

  useEffect(() => {
    localStorage.setItem("finresearch_sessions", JSON.stringify(sessions));
  }, [sessions]);

  useEffect(() => {
    if (activeSession) {
      localStorage.setItem(
        "finresearch_active_session",
        JSON.stringify(activeSession)
      );
    } else {
      localStorage.removeItem("finresearch_active_session");
    }
  }, [activeSession]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("finresearch_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("finresearch_user");
    }
  }, [user]);

  function createSession(data) {
    const session = {
      ...data,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      createdAt: new Date().toLocaleString(),
      status: "Created"
    };

    setSessions((previous) => [session, ...previous]);
    setActiveSession(session);
    setActivePage("Research Workspace");
  }

  function deleteSession(id) {
    setSessions((previous) =>
      previous.filter((session) => session.id !== id)
    );

    if (activeSession?.id === id) {
      setActiveSession(null);
      setActivePage("Dashboard");
    }
  }

  function signIn(name, email) {
    setUser({ name, email });
  }

  function signOut() {
    setUser(null);
    setActivePage("Dashboard");
  }

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        setPage={setActivePage}
      />

      <main className="main-content">
        <Header
          user={user}
          onSignIn={signIn}
          onSignOut={signOut}
        />

        {activePage === "Dashboard" && (
          <Dashboard
            sessions={sessions}
            setPage={setActivePage}
            setActiveSession={setActiveSession}
            onDeleteSession={deleteSession}
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
}