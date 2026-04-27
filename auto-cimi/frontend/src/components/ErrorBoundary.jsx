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
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState(prev => ({ errorCount: prev.errorCount + 1 }));
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-wrapper">
          <div className="error-boundary-bg">
            <div className="error-orb error-orb-1"></div>
            <div className="error-orb error-orb-2"></div>
            <div className="error-orb error-orb-3"></div>
          </div>

          <div className="error-boundary">
            <div className="error-icon-wrapper">
              <svg
                className="error-icon"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="60" cy="60" r="54" strokeWidth="2" />
                <path d="M60 40v20" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="60" cy="85" r="2.5" fill="currentColor" />
              </svg>
            </div>

            <div className="error-content">
              <h1 className="error-title">Diçka shkoi keq</h1>
              <p className="error-message">
                Na vjen keq, por hasim një problem teknik. Nuk është faji juaj!
              </p>

              <div className="error-details">
                <p className="error-code">
                  Kodi i gabimit: <span>500</span>
                </p>
              </div>

              <div className="error-actions">
                <button
                  className="btn-refresh"
                  onClick={this.handleRefresh}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 4v6h-6M1 20v-6h6" />
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36M20.49 15a9 9 0 0 1-14.85 3.36" />
                  </svg>
                  <span>Rifresh Faqen</span>
                </button>

                <button
                  className="btn-home"
                  onClick={() => window.location.href = '/'}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span>Kthe në Shtëpi</span>
                </button>
              </div>

              {this.state.errorCount > 1 && (
                <p className="error-hint">
                  Nëse problemi vazhdon, kontaktoni mbështetjen tonë.
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;