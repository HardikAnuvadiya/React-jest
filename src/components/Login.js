import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setErrors] = useState({});

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    console.log(formValues, "formValuesformValues");
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Please enter a valid email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else {
      setFormValues({
        email: "",
        password: "",
      });
    }
    console.log(errors, "errorserrors");
    return errors;
  };
  return (
    <div className="container">
      <form
        onSubmit={handleOnSubmit}
        className="login"
        data-testid="form"
        aria-label="form"
      >
        <h2>Welcome, User!</h2>
        <p>Please log in</p>
        <div className="ui form">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              data-testid="email-input"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleInputValue}
            />
          </div>
          <p data-testid="error-msg">{formErrors.email}</p>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              data-testid="password-input"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleInputValue}
            />
          </div>
          <p>{formErrors.password}</p>
          <button type="submit" className="btn" data-testid="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
