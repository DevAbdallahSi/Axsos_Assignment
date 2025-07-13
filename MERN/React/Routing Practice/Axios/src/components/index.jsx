import { useState } from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  const { number } = useParams();
  return (
    <div>
      {!isNaN(number)?
        <h1 style={{ color: "red" }}>the number is {number}</h1>:
        <h1 style={{ color: "red" }}>the is word {number}</h1>
      }
    </div>
  );
};
export default Index;
