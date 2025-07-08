import React from "react";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";

const Index = () => {
    const {number} = useParams();

  return (
    <div>
      <h1 style={{ color: "red" }}>the number is {number}</h1>
    </div>
  );
};

export default Index;
