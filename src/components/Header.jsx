import React, { useState } from "react";

export default function Header({ user, onSignIn, onSignOut }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim()) return;

    onSignIn(name.trim(), email.trim());
    setShowSignIn(false);
    setMenuOpen(false);
    setName("");
    setEmail("");
  }

  return (
    <header className="top-header">
      <div>
        <p className="eyebrow">FINANCIAL INTELLIGENCE PLATFORM</p>
        <h2>Multi-Agent Finance Research System</h2>
      </div>

      <div className="profile-container">
        <button
          className="profile-trigger"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="avatar">
            {user ? user.name.charAt(0).toUpperCase() : "FR"}
          </span>

          <span className="profile-label">
            <strong>{user ? user.name : "Research Analyst"}</strong>
            <small>{user ? user.email : "Guest Account"}</small>
          </span>

          <span aria-hidden="true">⌄</span>
        </button>

        {menuOpen && (
          <div className="profile-menu">
            {user ? (
              <>
                <p>
                  Signed in as
                  <br />
                  <strong>{user.email}</strong>
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    onSignOut();
                  }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <p>Welcome to FinResearch</p>
                <button
                  type="button"
                  onClick={() => {
                    setShowSignIn(true);
                    setMenuOpen(false);
                  }}
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {showSignIn && (
        <div
          className="modal-backdrop"
          onClick={() => setShowSignIn(false)}
        >
          <form
            className="signin-modal"
            onSubmit={handleSubmit}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close"
              onClick={() => setShowSignIn(false)}
            >
              ×
            </button>

            <p className="eyebrow">YOUR ACCOUNT</p>
            <h2>Sign In</h2>
            <p className="muted">
              Enter your details to set up your local demo profile.
            </p>

            <label htmlFor="profile-name">Full Name</label>
            <input
              id="profile-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              required
            />

            <label htmlFor="profile-email">Email Address</label>
            <input
              id="profile-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
            />

            <button className="primary-button" type="submit">
              Continue
            </button>
          </form>
        </div>
      )}
    </header>
  );
}