import { useState } from "react";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [isEdit, setIsEdit] = useState({
    email: false,
    password: false,
  });

  const handleChangeInput = (identifier, value) => {
    setInput((prevInput) => ({
      ...prevInput,
      [identifier]: value,
    }));

    setIsEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };

  const handleBlurInput = (identifier) => {
    setIsEdit((prevInput) => ({
      ...prevInput,
      [identifier]: true,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      "User email: " + input.email + " | " + "User password: " + input.password
    );
  };
  const isEmailInvalid = isEdit.email && !input.email.includes("@");

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={input.value}
            onChange={(event) => handleChangeInput("email", event.target.value)}
            onBlur={() => handleBlurInput("email")}
          />
          <div className="control-error">
            {isEmailInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={input.password}
            onChange={(event) =>
              handleChangeInput("password", event.target.value)
            }
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
