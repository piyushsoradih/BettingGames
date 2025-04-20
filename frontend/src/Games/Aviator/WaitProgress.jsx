import { useEffect, useState } from "react";

const WaitProgress = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 500); 
  }, []);

  const containerStyle = {
    width: "3.2em",
    height: "0.25em",
    backgroundColor: "#ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    margin: "100px auto",
  };

  const progressBarStyle = {
    width: start ? "0%" : "100%",
    height: "100%",
    backgroundColor: "red",
    transition: "width 9s linear",
  };

  return (
    <div style={containerStyle}>
      <div style={progressBarStyle}></div>
    </div>
  );
};

export default WaitProgress;
