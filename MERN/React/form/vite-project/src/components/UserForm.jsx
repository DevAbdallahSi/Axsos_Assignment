import React, { useState } from "react";

const UserForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
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
    setHasBeenSubmitted(true);
    console.log("Welcome", newUser);
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value.length < 1) {
      setEmailError("Email is required!");
    } else if (value.length < 3) {
      setEmailError("Email must be 3 characters or longer!");
    } else {
      setEmailError("");
    }
  };

  return (
    <div>
      <form onSubmit={createUser}>
        {hasBeenSubmitted ? (
          <h3>Thank you for submitting the form!</h3>
        ) : (
          <h3>Welcome, please submit the form.</h3>
        )}

        <div className="inputTag">
          <label>First Name:</label>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
          />
        </div>

        <div className="inputTag">
          <label>Last Name:</label>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
          />
        </div>

        <div className="inputTag">
          <label>Email:</label>
          <input type="text" onChange={handleEmail} value={email} />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </div>

        <div className="inputTag">
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="inputTag">
          <label>Confirm Password:</label>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmpassword}
          />
        </div>

        <div className="buttonTag">
          <input
            type="submit"
            value="Create User"
            disabled={emailError.length >= 0}
          />
        </div>
      </form>

      <h2>All Users:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>User {index + 1}</strong>
            <ul>
              <li>First Name: {user.firstname}</li>
              <li>Last Name: {user.lastname}</li>
              <li>Email: {user.email}</li>
              <li>Password: {user.password}</li>
              <li>Confirm Password: {user.confirmpassword}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;
