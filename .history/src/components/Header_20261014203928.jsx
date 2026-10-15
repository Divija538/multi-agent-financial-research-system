
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const pageTitles = {
    "/": "Dashboard",
    "/sessions": "Research Sessions",
    "/create": "Create Research",
  };

  const title = location.pathname.startsWith("/workspace/")
    ? "Research Workspace"
    : pageTitles[location.pathname] || "Financial Research";

  return (
    <header className="topbar">
      <div className="breadcrumb">
        <span>FinResearch</span>
        <span className="breadcrumb-divider">/</span>
        <strong>{title}</strong>
      </div>

      <div className="header-right">
        <span className="environment-badge">
          <span className="online-dot" />
          Local Environment
        </span>

        <div className="avatar" title="Demo user">
          DR
        </div>
      </div>
    </header>
  );
}
