import { Link } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";

const Nav = () => {
  const { world,bgColor, textColor } = useParams();

  const style = {
    backgroundColor: bgColor,
    color: textColor,
    padding: "50px",
    textAlign: "center",
    borderRadius: "8px",
    // minHeight: "100vh",
  };

  return (
    <>
      <div style={style}>
          This is theworld: {world} {bgColor} background with {textColor} text!
      </div>
    </>
  );
};
export default Nav;
