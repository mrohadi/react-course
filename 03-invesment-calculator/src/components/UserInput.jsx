import { useState } from "react";

export default function UserInput({ userInput, onHandleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            id="initial-investment"
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onHandleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            id="annual-investment"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onHandleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            id="expected-return"
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onHandleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onHandleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
