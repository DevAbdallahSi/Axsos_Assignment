import React, { useState } from "react";

const MyComponent = (props) => {
  const [msg, setMsg] = useState(null); 

  const onClickHandler = (e, movie) => {
    setMsg(movie);
  };

  return (
    <div>
      {props.movies.map((movie, index) => (
        <button style={{margin:"10px"}} key={index} onClick={(e) => onClickHandler(e, movie)}>{movie.title}</button>
      ))}
      {msg && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <p><strong>Title:</strong> {msg.title}</p>
          <p><strong>Year:</strong> {msg.year}</p>
        </div>
      )}
    </div>
  );
};
export default MyComponent;
