
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">F</div>
        <div>
          <h2>FinResearch</h2>
          <span>INTELLIGENCE PLATFORM</span>
        </div>
      </div>

      <p className="menu-label">WORKSPACE</p>

      <nav className="sidebar-nav">
        <NavLink to="/" end className="nav-link">
          <span className="nav-icon">▦</span>
          Dashboard
        </NavLink>

        <NavLink to="/sessions" className="nav-link">
          <span className="nav-icon">◷</span>
          Research Sessions
        </NavLink>

        <NavLink to="/create" className="nav-link">
          <span className="nav-icon">＋</span>
          New Research
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <div className="online-dot" />
        <div>
          <strong>Research workspace</strong>
          <p>Frontend development mode</p>
        </div>
      </div>
    </aside>
  );
}
