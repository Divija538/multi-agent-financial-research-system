import React from "react";

const menuItems = [
  { label: "Dashboard", icon: "⌂" },
  { label: "Create Session", icon: "+" },
  { label: "Research Workspace", icon: "▤" }
];

export default function Sidebar({ activePage, setPage }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">F</div>
        <div>
          <strong>FinResearch</strong>
          <small>Multi-Agent Research</small>
        </div>
      </div>

      <p className="menu-label">MAIN MENU</p>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`nav-item ${
              activePage === item.label ? "active" : ""
            }`}
            onClick={() => setPage(item.label)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot" />
        Frontend application ready
      </div>
    </aside>
  );
}