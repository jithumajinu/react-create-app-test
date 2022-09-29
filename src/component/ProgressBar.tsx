export const ProgressBar = () => {
  return (
    // <div className="container">
    //   <div className="bar"></div>
    // </div>
    <main>
      <h1>
        Loading<span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
        <sub>infinitely :)</sub>
      </h1>
      <div id="container">
        <div id="bar"></div>
      </div>
    </main>
  );
};

export default ProgressBar;
