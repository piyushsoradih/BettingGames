import { useState } from "react";

const AutoCashButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  const containerStyle = {
    width: "6vh",
    height: "3vh",
    backgroundColor: isOn ? "#4CAF50" : "#ccc",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
    transition: "background-color 0.3s",
  };

  const buttonStyle = {
    width: "3vh",
    height: "3vh",
    backgroundColor: "white",
    borderRadius: "50%",
    position: "absolute",
    left: isOn ? "48%" : "2%",
    top: "50%",
    transform: "translateY(-50%)",
    transition: "left 0.2s",
  };

  return (
    <div style={containerStyle} onClick={toggle}>
      <div style={buttonStyle}></div>
    </div>
  );
};

export default AutoCashButton;
