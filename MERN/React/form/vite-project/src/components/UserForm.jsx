import React, { useState } from "react";

const UserForm = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [users, setUsers] = useState([]);


  const createUser = (e) => {
    e.preventDefault();

    const newUser = { firstname, lastname, email, password, confirmpassword };
    setUsers([...users, newUser]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    console.log("Welcome", newUser);
  };
  return (
    <div>
      <form onSubmit={createUser}>
        <div className="inputTag">
          <label>FirstName:</label>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
          />
        </div>
        <div className="inputTag">
          <label>LastName:</label>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
          />
        </div>
        <div className="inputTag">
          <label>Email:</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="inputTag">
          <label> Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="inputTag">
          <label> confirmPassword:</label>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmpassword}
          />
        </div>
        <div className="buttomTag">
          <input type="submit" value="newUser" />
        </div>
      </form>
      <h2>All Users :</h2>
      <ul>
        {users.map((user, index) => (
          <>
            <li key={index}>firstname: {user.firstname}</li>
            <li key={index}>lastname: {user.lastname}</li>
            <li key={index}>email: {user.email}</li>
            <li key={index}>password: {user.password}</li>
            <li key={index}>confirmpassword: {user.confirmpassword}</li>
          </>
        ))}
      </ul>
    </div>
  );
};
export default UserForm;
