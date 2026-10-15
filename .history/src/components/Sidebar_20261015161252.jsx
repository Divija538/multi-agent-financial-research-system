const menuItems = [
  { name: "Dashboard", icon: "▦" },
  { name: "Create Session", icon: "+" },
  { name: "Research Workspace", icon: "⌘" }
];

export default function Sidebar({ page, setPage }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">F</div>
        <div>
          <strong>FinResearch</strong>
          <small>AI Research Platform</small>
        </div>
      </div>

      <p className="menu-label">MAIN MENU</p>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`nav-item ${
              page === item.name ? "active" : ""
            }`}
            onClick={() => setPage(item.name)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot"></span>
        Frontend environment ready
      </div>
    </aside>
  );
}