import React from "react";

const DisplayBox = (props) => {
  return (
    <div className="box" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "1rem" }}>
      {props.boxs.map((color, idx) => (
        <div
          key={idx}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: color,
            border: "3px solid white",
          }}
        >
        </div>
      ))}
      
    </div>
  );
};

export default DisplayBox;
