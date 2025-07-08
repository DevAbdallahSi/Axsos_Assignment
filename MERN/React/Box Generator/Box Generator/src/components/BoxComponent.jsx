import React, { useState } from "react";

const BoxForm = (props) => {
  const [boxForm, setBoxForm] = useState({
    favoriteColor: ""
  });

  const [formErrors, setFormErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoxForm({ ...boxForm, [name]: value });
    validateField(name, value);
  };

  // Validate color field
  const validateField = (name, value) => {
    let errors = { ...formErrors };

    if (name === "favoriteColor") {
      const isValidColor = isCSSColor(value);
      errors.favoriteColor = isValidColor ? "" : "Invalid color value.";
    }

    setFormErrors(errors);
  };

  // Check if it's a valid CSS color
  function isCSSColor(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
  }

  // Submit form
  const createBox = (e) => {
    e.preventDefault();

    if (!isCSSColor(boxForm.favoriteColor)) {
      alert("Please enter a valid color.");
      return;
    }
props.addBox(boxForm.favoriteColor);


    console.log("Box created with color:", boxForm.favoriteColor);

  };

  return (
    <>
      <form onSubmit={createBox}>
        <label>Color</label>
        <input
          type="text"
          name="favoriteColor"
          placeholder="Enter a color (e.g. red, #ff0000)"
          value={boxForm.favoriteColor}
          onChange={handleChange}
        />
        {formErrors.favoriteColor && (
          <p style={{ color: "red" }}>{formErrors.favoriteColor}</p>
        )}
        <button type="submit">Create Box</button>
      </form>
    </>
  );
};

export default BoxForm;
