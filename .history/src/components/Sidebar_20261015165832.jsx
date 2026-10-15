import React from "react";

const menuItems = [
  { label: "Dashboard", icon: "⌂" },
  { label: "Create Session", icon: "+" },
  { label: "Research Workspace", icon: "▤" },
];

export default function Sidebar({ activePage, setPage }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">F</div>
        <div>
          <h2>FinResearch</h2>
          <p>Multi-Agent Research</p>
        </div>
      </div>

      <p className="menu-heading">MAIN MENU</p>

      <nav className="navigation">
        {menuItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`nav-item ${
              activePage === item.label ? "active" : ""
            }`}
            onClick={() => setPage(item.label)}
            aria-current={
              activePage === item.label ? "page" : undefined
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot" />
        Frontend operational
      </div>
    </aside>
  );
}