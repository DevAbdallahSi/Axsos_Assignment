import React, { useState } from "react";

const FormComponents = (props) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errors = { ...formErrors };
    switch (name) {
      case "firstname":
        errors.firstname =
          value.length < 2 ? "First name must be at least 2 characters." : "";
        break;
      case "lastname":
        errors.lastname =
          value.length < 2 ? "Last name must be at least 2 characters." : "";
        break;
      case "email":
        errors.email =
          value.length < 5 || !value.includes("@")
            ? "Email must be valid and at least 5 characters."
            : "";
        break;
      case "password":
        errors.password =
          value.length < 6 ? "Password must be at least 6 characters." : "";
        break;
      case "confirmpassword":
        errors.confirmpassword =
          value !== formData.password ? "Passwords do not match." : "";
        break;
      default:
        break;
    }
    setFormErrors(errors);
  };
  const validateForm = () => {
    for (let key in formErrors) {
      if (formErrors[key]) return false;
    }
    for (let key in formData) {
      if (formData[key] === "") return false;
    }
    return true;
  };

  const createUser = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fix validation errors before submitting.");
      return;
    }
     props.onNewUser(formData);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
    setFormErrors({});
    setHasBeenSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={createUser}>
        {hasBeenSubmitted ? (
          <h3>✅ Thank you for submitting the form!</h3>
        ) : (
          <h3>Welcome, please submit the form.</h3>
        )}

        {/* First Name */}
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          {formErrors.firstname && (
            <p style={{ color: "red" }}>{formErrors.firstname}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          {formErrors.lastname && (
            <p style={{ color: "red" }}>{formErrors.lastname}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <p style={{ color: "red" }}>{formErrors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && (
            <p style={{ color: "red" }}>{formErrors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
          />
          {formErrors.confirmpassword && (
            <p style={{ color: "red" }}>{formErrors.confirmpassword}</p>
          )}
        </div>

        <div>
          <button type="submit">Create User</button>
        </div>
      </form>''

      {/* <h2>All Users:</h2> */}
      {/* <h2>{formData.firstname}</h2> */}
      {/* <ul>
        {users.map((user, idx) => (
          <li key={idx}>
            {user.firstname} {user.lastname} - {user.email}
          </li>
        ))}
      </ul> */}
    </div>
  );
};
export default FormComponents;
