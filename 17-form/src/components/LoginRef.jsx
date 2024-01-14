import { useRef, useState } from "react";

export default function LoginRef() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const validEmail = email.includes("@");
    if (!validEmail) {
      setIsInvalidEmail(true);
      return;
    }

    setIsInvalidEmail(false);

    console.log("Sending HTTP request...");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} />
          <div className="control-error">
            {isInvalidEmail && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
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
