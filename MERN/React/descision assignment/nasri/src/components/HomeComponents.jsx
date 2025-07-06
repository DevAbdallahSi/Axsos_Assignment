import React, { useState } from "react";

const DisplayUsers = (props) => {
  return (
    <>
      <h2>All Users:</h2>
      <ul>
        {props.users.map((user, idx) => (
          <li key={idx}>
            {user.firstname} {user.lastname} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};
export default DisplayUsers;
