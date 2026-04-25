import { Component } from "react";
import "./ErrorBoundary.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorCount: 0 };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Critical Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-wrapper">
          <div className="error-boundary-content">
            <div className="error-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <h2 className="error-title">Ka ndodhur një <span>gabim</span></h2>
            <p className="error-msg">Sistemi hasi në një problem teknik. Ju lutemi provoni të rifreskoni faqen.</p>
            <button className="error-btn" onClick={() => window.location.reload()}>
              Rifresko Sistemin
            </button>
          </div>
          <div className="error-bg-text">500 ERROR</div>
          <div className="error-orb" />
        </div>
      );
    }

    return this.props.children;
  }
}


export default ErrorBoundary;