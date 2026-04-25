import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-logo">
        AUTO<span>CIMI</span>
      </div>
      <div className="loading-bar-container">
        <div className="loading-bar"></div>
      </div>
      <p className="loading-text">Duke ngarkuar...</p>
    </div>
  );
};

export default Loading;