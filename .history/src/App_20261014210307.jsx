import React from "react";
export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0b1020",
      color: "white",
      padding: "40px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>FinResearch Dashboard</h1>
      <p>Your Multi-Agent Finance Research System frontend is running!</p>
      <button
        onClick={() => alert("React is working!")}
        style={{
          background: "#587cf5",
          color: "white",
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Test Application
      </button>
    </div>
  );
}