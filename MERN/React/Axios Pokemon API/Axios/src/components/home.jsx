import {Link} from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
    const {world}=useParams();

  return (
    <div>
      <h1 style={{ color: "red" }}>Welcome Devloper</h1>
      <h1 style={{ color: "red" }}>Welcome Devloper <br />:{world}</h1>
    </div>
  );
};

export default Home;
